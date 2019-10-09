import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './login.component.html',
  styles: [`
  em{float:right;color: red;padding-left:10px},
  button{cursor:pointer;}
  `]

})

export class LoginComponent {
  username: string
  password: string
  mouseOverLogin:boolean
  constructor(private authService:AuthService, private router:Router){}

  login(formField){
    this.authService.loginUser(formField.userName, formField.password);
    this.router.navigate(['character'])
  }
  cancel() {
    this.router.navigate(['character']);
  }
}
