import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'widgets';
  subtitle: string;
  subscription: Subscription;

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.subscription = this.titleService.title$.subscribe(title => this.subtitle = title);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
