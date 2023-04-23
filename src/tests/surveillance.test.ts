import {Sensor} from "../sensor";
import {Camera} from "../camera";
import {SurveillanceSystem} from "../surveillanceSystem";

describe('Surveillance System', () => {

  describe('Callbacks', function () {
    class FakeSensor extends Sensor {
      detectMovement(): void {
        this.notifyAllCallbacks({type: 'movement'});
      }
      triggerOtherEvent(): void {
        this.notifyAllCallbacks();
      }
    }
    it('starts recording when movement is detected', () => {
      const camera: Camera = {
        record: jest.fn()
      };
      const sensor = new FakeSensor();
      const surveillanceSystem = new SurveillanceSystem(camera, sensor);
      surveillanceSystem.start();

      sensor.detectMovement();

      expect(camera.record).toHaveBeenCalled();
    });

    it('not record when sensor does not detect movement', () => {

      const camera: Camera = {
        record: jest.fn()
      };
      const sensor = new FakeSensor();
      const surveillanceSystem = new SurveillanceSystem(camera, sensor);
      surveillanceSystem.start();

      sensor.triggerOtherEvent();

      expect(camera.record).not.toHaveBeenCalled();
    });

  });

  describe('Observer', function () {
    class FakeSensor extends Sensor {
      detectMovement(): void {
        this.notifyAllObservers();
      }
    }

    it('Observer', () => {
      const camera: Camera = {
        record: jest.fn()
      };

      const sensor = new FakeSensor();
      const surveillanceSystem = new SurveillanceSystem(camera, sensor);
      surveillanceSystem.start();

      sensor.detectMovement();

      expect(camera.record).toHaveBeenCalled();
    });

  });

});
