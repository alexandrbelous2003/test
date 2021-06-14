import { AuthenticationFacadeService } from '@air-authentication/authentication.facade.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CoreFacadeService {

  private authToken: string;

  constructor(
    private authenticationFacadeService: AuthenticationFacadeService,
  ) {
    this.authToken = this.authenticationFacadeService.getAuthToken();

  }

  public setAuthToken(token: string): void {
    this.authToken = token;
  }

  public getAuthToken(): string {
    return this.authToken+'32432';
  }






}
