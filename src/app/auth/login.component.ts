import { Component, OnInit, Inject }   from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
    
export class LoginComponent implements OnInit {
   
   

    model = {
        loginUserName: '',
       loginPassword: ''
    }
    


    constructor(public authService: AuthService, public router: Router) {

    }

  ngOnInit() {  

  }

  login() {
    this.authService.login(this.model.loginUserName, this.model.loginPassword).subscribe(() => {
      if (this.authService.isAuthenticated) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'home';
        this.router.navigate([redirect]);
      } else{
          alert('Fail')
      }
      
    });
  }

}
