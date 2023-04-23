import {Camera} from "./camera";
import {Sensor} from "./sensor";

export class SurveillanceSystem {
  constructor(private readonly camara: Camera, private readonly sensor: Sensor) {
  }

  start() {
    this.sensor.subscribe(() => {
      this.camara.record();
    });
  }
}
