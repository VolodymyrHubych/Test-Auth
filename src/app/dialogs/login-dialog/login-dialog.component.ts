import { Component, OnInit, Inject }   from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ToasterService} from 'angular2-toaster';
import {SignDialogComponent} from '../sign-dialog/sign-dialog.component'


@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.component.html',
   styleUrls: ['./login-dialog.component.less']
})
export class LoginDialogComponent implements OnInit{

  loginForm: FormGroup;
  userName: FormControl;
  password: FormControl;     
    
  constructor(
    public dialog: MatDialog, 
    public authService: AuthService, public router: Router, public toast: ToasterService,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
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

  openSignDialog(): void {
     this.dialogRef.close();
    let dialogRef = this.dialog.open(SignDialogComponent, {
      width: "330px",
      height:'500px'
    });
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