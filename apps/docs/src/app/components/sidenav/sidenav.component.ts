import { Component } from '@angular/core';
import { RouteDataService } from 'src/app/services/route-data.service';
import { Observable } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  hideSidenav$: Observable<boolean>;

  constructor(
    private routeData: RouteDataService,
    private layoutService: LayoutService
  ) {
    this.hideSidenav$ = this.routeData.hideSidenav$;
  }

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
