import { Component } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: [ './widgets.component.scss' ]
})
export class WidgetsComponent {
  constructor(private layoutService: LayoutService) {}

  get sidenavMode() {
    return this.layoutService.sidenavMode$;
  }

  get sidenavOpen() {
    return this.layoutService.sidenavOpen$;
  }

  get disableClose() {
    return this.layoutService.disableClose$;
  }

  backdropClick(event) {
    this.layoutService.closeSidenav();
  }
}
