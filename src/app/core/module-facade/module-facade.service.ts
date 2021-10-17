import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleFacadeService implements OnDestroy {

  protected subscription: Subscription;

  protected _handleOnEventOccursFabric:( { [K: string]: IModuleFacadeFunction } ) = {

  };

  constructor() {
    this.subscription = new Subscription();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }



  public handleOnEventOccursFabric(event: IEvent): any {
    if (this._handleOnEventOccursFabric[`on${event.key}Event`]) {
      return this._handleOnEventOccursFabric[`on${event.key}Event`]
    }
    throw new Error(`Module Facade Service. Ошибка в методе handleOnEventOccursFabric(). Тип ошибки: отсутствует вызываемый метод on${event.key}Event()`);
  }

}
