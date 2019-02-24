import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProModule } from '../../projects/widgets/src/public_api';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { components } from './components';
import { MatModule } from './mat.module';

@NgModule({
  declarations: [
    AppComponent,
    components
  ],
  imports: [
    BrowserModule,
    ProModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
