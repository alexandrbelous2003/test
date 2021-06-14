import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationFacadeService {

  private authToken: string;

  constructor() {
    this.authToken = '';
  }

  public setAuthToken(token: string): void {
    this.authToken = token;
  }

  public getAuthToken(): string {
    return this.authToken;
  }

}
