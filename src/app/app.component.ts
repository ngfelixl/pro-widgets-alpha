import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouteDataService } from './services/route-data.service';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'widgets';
  subtitle: string;
  subscription: Subscription;

  constructor(
    private titleService: RouteDataService,
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.subscription = this.titleService.title$.subscribe(title => this.subtitle = title);
  }

  get displayIcon() {
    return this.layoutService.sidenavMode$;
  }

  openSidenav() {
    this.layoutService.openSidenav();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
