import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaugeDemoComponent } from './components/gauge-demo/gauge-demo.component';
import { AnalogStickDemoComponent } from './components/analog-stick-demo/analog-stick-demo.component';
import { HomeComponent } from './components/home/home.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InstallationComponent } from './components/installation/installation.component';
import { ContributingComponent } from './components/contributing/contributing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'widgets', component: WidgetsComponent, children: [
    { path: 'installation', component: InstallationComponent, data: { subtitle: 'Installation' } },
    { path: 'gauge', component: GaugeDemoComponent, data: { subtitle: 'Gauge' } },
    { path: 'analog-stick', component: AnalogStickDemoComponent, data: { subtitle: 'Analog Stick' } },
    { path: 'contributing', component: ContributingComponent, data: { subtitle: 'Contributing' } },
  ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
