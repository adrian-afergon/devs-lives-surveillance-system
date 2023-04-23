import {Camera} from "./camera";
import {Observer, Sensor} from "./sensor";

export class SurveillanceSystem implements Observer {
  constructor(private readonly camara: Camera, private readonly sensor: Sensor) {
  }

  start() {
    this.sensor.subscribe((event) => {
      if (event?.type === 'movement') {
        this.camara.record();
      }
    });
    this.sensor.subscribeObserver(this)
  }

  execute(): void {
    this.camara.record();
  }
}
