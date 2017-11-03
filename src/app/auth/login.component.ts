import { Component, OnInit, Inject }   from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LoginDialogComponent} from '../dialogs/login-dialog/login-dialog.component'
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
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      width: "300px",
      height:'350px'
    });
  }
}




