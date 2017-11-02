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
<<<<<<< HEAD

    constructor( public authService: AuthService,public router: Router, public dialog: MatDialog) {
=======
  
  constructor(  public dialog: MatDialog) {
>>>>>>> cb90a60f209b8072f19d2a903580589d3e352950

  }

  ngOnInit() {

  }

   openDialog(): void {
    let dialogRef = this.dialog.open(LoginDialog, {
      width: '250px',
      height:'300px'
    });
  }
}
<<<<<<< HEAD
//kl4thlv
=======


>>>>>>> cb90a60f209b8072f19d2a903580589d3e352950
@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
    styleUrls: ['./login.component.less']
})
export class LoginDialog {
<<<<<<< HEAD
  model = {
      loginUserName: '',
      loginPassword: ''
    }
=======

  loginForm: FormGroup;
  userName: FormControl;
  password: FormControl;     
>>>>>>> cb90a60f209b8072f19d2a903580589d3e352950
    
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

