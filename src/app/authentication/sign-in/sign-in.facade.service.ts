import { ISignInPayload } from '@air-authentication/models/authentication.models';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SignInFacadeService {

  constructor() {}

  public onSubmit(payload: ISignInPayload): void {
    console.error('Я Саша овощь!!!!!');
    console.error(payload);
  }

}
