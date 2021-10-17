declare interface IEvent {
  key: string;
  event?: Event;
  timestamp: number;
  type: IEventType;
  component: string;
  payload?: any
}

declare type IEventType = 'inbound' | 'outbound' | 'broadcastChanel';
