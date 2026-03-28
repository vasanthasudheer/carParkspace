import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../core/service/user-service';
import { Router } from '@angular/router';
import { IResponse } from '../../models/interface/IResponse';
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/service/auth';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit, OnDestroy {
  userSrv = inject(UserService);
  router = inject(Router);
  authsrv = inject(Auth);

  subscription: Subscription[] = [];

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

  UserRoles$!: Observable<any[]>;

  ngOnInit(): void {
    this.UserRoles$ = this.userSrv.getAllRoles();
  }

  OnRegister() {
    let s1 = this.userSrv.PostUser(this.userform.value).subscribe({
      next: (res: IResponse) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      error: err => console.log(err)
    });

    this.subscription.push(s1);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(m => m.unsubscribe());
  }
}