import { Component, inject } from '@angular/core';
import { login } from '../../models/login';
import { UserService } from '../../core/service/user-service';
import { IResponse } from '../../models/interface/IResponse';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginobj: login = new login();
  userSrv=inject(UserService);

  constructor() {
  }
  ngOnInit(): void {

  }
 OnLogin()
  { 
    this.userSrv.PostLogin(this.loginobj).subscribe({
      next:(res:IResponse)=>{
        console.log(res);
        alert(res.message);
        localStorage.setItem('user', JSON.stringify(res.data));

      },
      error:(err:any)=>{
        alert(err.error.message);
        console.log(err);
      }
    })

  }
    ClearFormcontrols() {
    this.loginobj.email = '';
    this.loginobj.passwordHash = '';
  }

}