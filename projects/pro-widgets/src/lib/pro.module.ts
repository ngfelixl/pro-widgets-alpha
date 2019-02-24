import { NgModule } from '@angular/core';
import { AnalogStickModule } from './analog-stick/analog-stick.module';
import { GaugeModule } from './gauge/gauge.module';

@NgModule({
  imports: [
  ],
  exports: [
    AnalogStickModule,
    GaugeModule
  ]
})
export class ProModule { }
