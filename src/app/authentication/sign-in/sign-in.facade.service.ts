import { ISignInPayload, ISignInResponse } from '@air-authentication/authentication.models';
import { AuthenticationService } from '@air-authentication/services/authentication.service';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SignInFacadeService implements OnDestroy {

  private subscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
  ) {
    this.subscription = new Subscription();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public onSubmit(payload: ISignInPayload): void {
    this.subscription
      .add(
        this.authenticationService.onSignIn<ISignInPayload, ISignInResponse>(payload)
          .pipe()
          .subscribe()
      )
  }

}
