import { Component, OnInit, Inject }   from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ToasterService} from 'angular2-toaster';
import {User} from '../../models/user'
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';


@Component({
  selector: 'app-sign-dialog',
  templateUrl: './sign-dialog.component.html',
  styleUrls: ['./sign-dialog.component.less']
})
export class SignDialogComponent implements OnInit {

 loginForm: FormGroup;
  userName: FormControl;
  password: FormControl; 
  confirm: FormControl;  
    lastName: FormControl;  
     firstName: FormControl;      
    
  constructor(
    public dialog: MatDialog,
    public authService: AuthService, public router: Router, public toast: ToasterService,
    public dialogRef: MatDialogRef<SignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.confirm = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.firstName = new FormControl('', Validators.required);
   

    this.loginForm = new FormGroup({
      userName: this.userName,
      password: this.password,
      confirm : this.confirm,
      firstName: this.firstName,
      lastName : this.lastName
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
      this.dialog.open(LoginDialogComponent, {
      width: "300px",
      height:'350px'
    });
  }

   sign() {
     var model: User = <User> {
       userName: this.userName.value,
       password : this.password.value,
       ConfirmPassword : this.confirm.value,
       firstName: this.firstName.value,
       lastName : this.lastName.value    
    };
    this.authService.sign(model).subscribe(() => {     
       this.toast.pop('success', '', 'Hello! Try to login!');   
    }, (er)=> {
         this.toast.pop('error', '', er);
    })
  }

}