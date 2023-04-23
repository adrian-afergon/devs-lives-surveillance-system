import {Sensor} from "../sensor";

//*
// Subscriber.subscribe(Oberver)
// SurveillanceSystem implements Observer
// */


describe('Sensor', () => {

  class FakeSensor extends Sensor {
    getSubscribers() {
      return this.callbacks;
    }

    notify() {
      this.notifyAllCallbacks();
    }
  }

  it('should contains all subscribers', () => {
    const callback = () => {};
    const sensor = new FakeSensor();

    sensor.subscribe(callback);

    expect(sensor.getSubscribers()).toEqual([callback]);
  })

  it('calls all subscribers when movement is detected', () => {
    const callback = jest.fn();
    const sensor = new FakeSensor();
    sensor.subscribe(callback);

    sensor.notify();

    expect(callback).toHaveBeenCalled();
  });

});
