import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
 
export class Auth {
 
  usernamesubject = new BehaviorSubject<string | null>(this.loggedUserName());
  username$ = this.usernamesubject.asObservable();

  setUsername(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.usernamesubject.next(this.loggedUserName());
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  getUserId(): number {
    return this.getUser(). userId || 0;
  }

  getRoleId(): number {
    return this.getUser()  .roleId || 0;
  }

  loggedUserName(): string {
    return this.getUser(). fullName || '';
  }

  getRoleName(): string {
    const roleid = this.getRoleId();

    if (roleid === 1) return 'Owner';
    if (roleid === 2) return 'Customer';
    return 'Admin';
  }

  isOwner(): boolean {
    return this.getRoleName() === 'Owner';
  }

  isCustomer(): boolean {
    return this.getRoleName() === 'Customer';
  }

  logout() {
    localStorage.removeItem('user');
  }

  setEmptyUsername() {
    this.usernamesubject.next('');
  }
}