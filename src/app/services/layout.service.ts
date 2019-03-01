import { Injectable } from '@angular/core';
import { fromEvent, Observable, BehaviorSubject } from 'rxjs';
import { map, startWith, tap, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  sidenavMode$: Observable<string>;
  sidenavOpen$ = new BehaviorSubject<boolean>(true);
  disableClose$ = new BehaviorSubject<boolean>(true);
  private threshold = 700;

  constructor() {
    this.sidenavMode$ = fromEvent(window, 'resize').pipe(
      map((event) => window.innerWidth > this.threshold ? 'side' : 'over'),
      distinctUntilChanged(),
      startWith(window.innerWidth > this.threshold ? 'side' : 'over'),
      tap((mode: string) => {
        switch (mode) {
          case 'over': this.sidenavOpen$.next(false); this.disableClose$.next(false); break;
          default: this.sidenavOpen$.next(true); this.disableClose$.next(true); break;
        }
      })
    );
  }

  openSidenav() {
    this.sidenavOpen$.next(true);
  }

  closeSidenav() {
    this.sidenavOpen$.next(false);
  }
}
