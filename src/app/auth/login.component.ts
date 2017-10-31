import { Component, OnInit, Inject }   from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
    
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    userName: FormControl;
    password: FormControl;
    loginFailed: boolean = false;


    loginUserName: string;
    loginPassword: string;


    constructor(public authService: AuthService, public router: Router) {

    }

  ngOnInit() {
    this.loginUserName = 'User Name' ;
    this.loginPassword =  'Password' ;

      this.userName = new FormControl('', Validators.required);
      this.password = new FormControl('', Validators.required);

      this.loginForm = new FormGroup({
          userName: this.userName,
          password: this.password
      });
      
     

  }

  login() {
    this.authService.login(this.userName.value, this.password.value).subscribe(() => {
      if (this.authService.isAuthenticated) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'home';
        this.router.navigate([redirect]);
      } else{
          this.userName.setValue('');
          this.password.setValue('');
      }
      
    });
  }

  logout() {
    this.authService.logout();
  }
}
