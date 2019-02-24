import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TitleService } from './services/title.service';
import { LayoutService } from './services/layout.service';
import { map } from 'rxjs/operators';

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
    private titleService: TitleService,
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
