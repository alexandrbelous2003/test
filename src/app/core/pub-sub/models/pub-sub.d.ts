declare type IPubSubDataKey = | 'inboundEvent';

declare interface IPubSubCallBackFunction {
  (dataKey: IPubSubDataKey, data: {[key: string]: any}): void;
}
