import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  ProModule,
  GaugeComponent,
  DigitalGaugeComponent,
  AnalogStickComponent
} from 'pro-widgets';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { components } from './components';
import { MatModule } from './mat.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WidgetHostDirective } from './directive/widget-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    components,
    WidgetHostDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    GaugeComponent,
    DigitalGaugeComponent,
    AnalogStickComponent
  ]
})
export class AppModule {}
