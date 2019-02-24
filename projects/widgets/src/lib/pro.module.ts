import { NgModule } from '@angular/core';
import { AnalogStickComponent } from './analog-stick/analog-stick.component';
import { GaugeComponent } from './gauge/gauge.component';

@NgModule({
  declarations: [
    AnalogStickComponent,
    GaugeComponent
  ],
  imports: [
  ],
  exports: [
    AnalogStickComponent,
    GaugeComponent
  ]
})
export class ProModule { }
