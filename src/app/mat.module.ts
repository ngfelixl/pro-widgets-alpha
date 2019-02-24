import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatTabsModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MatModule {}
