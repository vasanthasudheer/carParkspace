import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../core/service/user-service';
import { Router } from '@angular/router';
import { IResponse } from '../../models/interface/IResponse';
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/service/auth';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  userSrv=inject(UserService);
  router=inject(Router);
  authsrv=inject(Auth);
  constructor() {
  }

 userform: FormGroup = new FormGroup({
    userId: new FormControl(0),
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    passwordHash: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
    city: new FormControl(''),
    isActive: new FormControl(true),
    createdDate: new FormControl(new Date())
  });
  UserRoles$: any;
  http: any;

  OnRegister() {
    console.log(this.userform.value);
    this.userSrv.PostUser(this.userform.value).subscribe({
      next: (res:IResponse) => {
        console.log('Registration successful:', res);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed:', error);
      }
    });
  }
    ngOnInit(): void {
    this.UserRoles$ = this.http.getAllRoles()
  }

}
