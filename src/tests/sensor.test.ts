import {Observer, Sensor} from "../sensor";

//*
// Subscriber.subscribe(Oberver)
// SurveillanceSystem implements Observer
// */


describe('Sensor', () => {

  describe('Callbacks', function () {
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

  describe('Observers', function () {
    class FakeSensor extends Sensor {
      getObservers() {
        return this.observers;
      }

      notify() {
        this.notifyAllObservers();
      }
    }
    it('should contains all observers', () => {
      const observer: Observer = {
        execute: () => {}
      };
      const sensor = new FakeSensor();

      sensor.subscribeObserver(observer);

      expect(sensor.getObservers()).toEqual([observer]);
    })

    it('calls all observers when movement is detected', () => {
      const observer = {
        execute: jest.fn()
      };
      const sensor = new FakeSensor();
      sensor.subscribeObserver(observer);

      sensor.notify();

      expect(observer.execute).toHaveBeenCalled();
    });
  });
});
