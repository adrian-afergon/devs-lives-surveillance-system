export interface Observer {
  execute: () => void;
}

interface SensorEvent {
  type: 'movement';
}

export abstract class Sensor {
  protected callbacks: ((event?: SensorEvent) => void)[] = [];
  protected observers: Observer[] = [];

  subscribe(callback: (event?: SensorEvent) => void): void {
    this.callbacks.push(callback);
  }

  protected notifyAllCallbacks(event?: SensorEvent) {
    this.callbacks.forEach(callback => callback(event));
  }

  subscribeObserver(observer: { execute: () => void }) {
    this.observers.push(observer);
  }

  protected notifyAllObservers() {
    this.observers.forEach(observer => observer.execute());
  }
}
