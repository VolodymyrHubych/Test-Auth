import { Component, OnInit, Inject }   from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector:  "app-login",
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
    
export class LoginComponent implements OnInit {
   
   

    


    constructor( public authService: AuthService,public router: Router, public dialog: MatDialog) {

    }

  ngOnInit() {  

  }

   openDialog(): void {
    let dialogRef = this.dialog.open(LoginDialog, {
      width: '250px',
      height:'300px'
    });

    dialogRef.afterClosed().subscribe(result => {
       result && this.login(result)
    });
  }

  login(model:any) {
    this.authService.login(model.loginUserName, model.loginPassword).subscribe(() => {
      if (this.authService.isAuthenticated) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'home';
        this.router.navigate([redirect]);
      } else{
          alert('Fail')
      }
      
    });
  }

  

}

@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
   styleUrls: ['./login.component.less']
})
export class LoginDialog {
  model = {
        loginUserName: '',
       loginPassword: ''
    }
    
  constructor(
    public dialogRef: MatDialogRef<LoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  

}

