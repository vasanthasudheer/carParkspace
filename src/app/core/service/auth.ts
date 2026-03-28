import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
<<<<<<< HEAD
 
export class Auth {
 
  usernamesubject = new BehaviorSubject<string | null>(this.loggedUserName());
  username$ = this.usernamesubject.asObservable();

  setUsername(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.usernamesubject.next(this.loggedUserName());
=======
export class Auth {

  usernamesubject = new BehaviorSubject<string | null>(this.loggedUserName());

  username$ = this.usernamesubject.asObservable();

  setUsername(name: string) {
    debugger;
    //  localStorage.setItem('user'),
    localStorage.setItem('user', name);

    const nm = this.loggedUserName();
    this.usernamesubject.next(nm);
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
<<<<<<< HEAD

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
=======
  getRoleId(): number {
    debugger;

    return this.getUser().roleId;
  }

  getUserId(): number {
    debugger;
    return this.getUser().userId;
  }
  getRoleName(): string {
    let roleid = this.getUser().roleId;

    if (roleid == 1)
      return 'Owner'
    else if (roleid == 2)
      return 'Customer'
    else
      return 'Admin'
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7
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

<<<<<<< HEAD
=======
  loggedUserName(): string {
    debugger;
    return this.getUser().fullName;
  }
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7
  setEmptyUsername() {
    this.usernamesubject.next('');
  }
}