export abstract class Sensor {
  protected callbacks: (() => void)[] = [];

  subscribe(callback: () => void): void {
    this.callbacks.push(callback);
  }

  protected notifyAllCallbacks() {
    this.callbacks.forEach(callback => callback());
  }
}
