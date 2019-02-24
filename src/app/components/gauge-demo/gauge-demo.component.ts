import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { styles } from './themes';

@Component({
  selector: 'app-gauge-demo',
  templateUrl: `./gauge-demo.component.html`,
  styleUrls: [ `./gauge-demo.component.scss` ]
})
export class GaugeDemoComponent implements OnInit {
  value$: Observable<number>;
  form: FormGroup;
  styles = styles;

  constructor() {
    this.form = new FormGroup({
      min: new FormControl(styles[0].min),
      max: new FormControl(styles[0].max),
      unit: new FormControl(styles[0].unit),
      color: new FormControl(styles[0].color),
      pointerColor: new FormControl(styles[0].pointerColor),
      pointerLength: new FormControl(styles[0].pointerLength),
      stripeColor: new FormControl(styles[0].stripeColor),
      backgroundColor: new FormControl(styles[0].backgroundColor),
    });
  }

  ngOnInit() {
    this.value$ = Observable.create((observer: Observer<number>) => {
      setInterval(() => {
        const value = Math.sin(new Date().getTime() / 1000) * 50 + 50;
        observer.next(Math.round(value * 100) / 100);
      }, 10);
    });
  }

  usePreset(style) {
    this.form.patchValue(style);
  }

  get style() {
    return this.form.getRawValue();
  }
}
