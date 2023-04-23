import {Sensor} from "../sensor";
import {Camera} from "../camera";
import {SurveillanceSystem} from "../surveillanceSystem";


class FakeSensor extends Sensor {
  detectMovement(): void {
    this.notifyAllCallbacks();
  }
}

describe('Surveillance System', () => {

  /*
  * sistema de vigilancia
  *  - sensor de movimiento
  *  - camara
  *  --> cuando detecta movimiento, la camara se activa
  * */

  it('starts recording when movement is detected', () => {
    const camara: Camera = {
      record: jest.fn()
    };
    const sensor = new FakeSensor();
    const surveillanceSystem = new SurveillanceSystem(camara, sensor);
    surveillanceSystem.start();

    sensor.detectMovement();

    expect(camara.record).toHaveBeenCalled();

  });

});
