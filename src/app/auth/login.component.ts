import { Component, OnInit, Inject }   from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ToasterService} from 'angular2-toaster';
@Component({
  selector:  "app-login",
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
    
export class LoginComponent implements OnInit {
  
  constructor(  public dialog: MatDialog, public authService : AuthService) {

  }

  ngOnInit() {

  }
    logout() {
        this.authService.logout();
    }

   openDialog(): void {
    let dialogRef = this.dialog.open(LoginDialog, {
      width: "250px",
      height:"300px"
    });
  }
}


@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
   styleUrls: ['./login.component.less']
})
export class LoginDialog {

  loginForm: FormGroup;
  userName: FormControl;
  password: FormControl;     
    
  constructor(
    public authService: AuthService, public router: Router, public toast: ToasterService,
    public dialogRef: MatDialogRef<LoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.loginForm = new FormGroup({
      userName: this.userName,
      password: this.password
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

   login() {
    this.authService.login(this.userName.value, this.password.value).subscribe(() => {
      if (this.authService.isAuthenticated) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'home';
        this.dialogRef.close();
        this.router.navigate([redirect]);
      } else {
          this.toast.pop('error', '', 'Password or  Login is incorect');
           this.userName.setValue('');
          this.password.setValue('');
      }      
    });
  }

}

