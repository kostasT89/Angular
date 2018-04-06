import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _signedIn: boolean;

  constructor() {
    this._signedIn = sessionStorage.getItem('signedin') === 'true';
  }

  get signedIn(): boolean {
    return this._signedIn;
  }

  set signedIn(val: boolean) {
    val ? sessionStorage.setItem('signedin', 'true') : sessionStorage.removeItem('signedin');
    this._signedIn = val;
  }
}
