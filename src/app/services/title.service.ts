import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  title$: Observable<string>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.title$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route.firstChild.firstChild && this.route.firstChild.firstChild.snapshot.data.subtitle)
    );
  }
}
