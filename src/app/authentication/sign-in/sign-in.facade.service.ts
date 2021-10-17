import { AuthenticationService } from '@air-authentication/services/authentication.service';
import { ModuleFacadeService } from '@air-core/module-facade/module-facade.service';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SignInFacadeService extends ModuleFacadeService implements OnDestroy {

  protected _handleOnEventOccursFabric:( { [K: string]: IModuleFacadeFunction } ) = {
    onSignInButtonClickEvent: this.onSignInButtonClickEvent
  };

  constructor(
    private authenticationService: AuthenticationService,
  ) {
    super();
    this.subscription = new Subscription();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public onSignInButtonClickEvent (event: IEvent): void {
    // this.subscription
    //   .add(
    //     this.authenticationService.onSignIn<ISignInPayload, ISignInResponse>(payload)
    //       .pipe()
    //       .subscribe()
    //   )
  }

}
