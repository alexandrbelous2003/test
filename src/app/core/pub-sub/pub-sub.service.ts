import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PubSubService {
  private sharedData: { [key: string]: any };
  private sharedDataState: { [key: string]: any };
  constructor() {
    this.sharedData = {};
    this.sharedDataState = {};
  }

  public subscribe(dataKey: IPubSubDataKey, fn: IPubSubCallBackFunction): void {
    // console.log(`PUBSUB: только что кто-то подписался на данные с ключом ${dataKey} `);
    this.sharedData[dataKey] = this.sharedData[dataKey] || [];
    this.sharedData[dataKey].push(fn);
    if (this.sharedDataState[dataKey]) {
      fn(dataKey, this.sharedDataState[dataKey]);
    }
  }

  public unsubscribe(dataKey: IPubSubDataKey, fn: IPubSubCallBackFunction): void {
    // console.log(`PUBSUB: только что кто-то отписался от данных с ключом${ dataKey } `);
    if (this.sharedData[dataKey]) {
      this.sharedData[dataKey] = this.sharedData[dataKey].filter( (f: IPubSubCallBackFunction ) => f !== fn);
    }
  }

  public publish(dataKey: IPubSubDataKey, data: {[key: string]: any}): void {
    // console.log(`PUBSUB: По ключу ${dataKey} опубликованны данные `, data);
    if (this.sharedData[dataKey]) {
      this.sharedData[dataKey].forEach( (f: IPubSubCallBackFunction) => {
        f(dataKey, data);
      });
    }
    if (!
    [
      'inboundEvent'
    ].includes(dataKey)) {
      this.sharedDataState[dataKey] = data;
    }

  }

}
