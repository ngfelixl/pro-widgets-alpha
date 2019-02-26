import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { styles } from './themes';

@Component({
  selector: 'app-digital-gauge-demo',
  templateUrl: `./digital-gauge-demo.component.html`,
  styleUrls: [ `./digital-gauge-demo.component.scss` ]
})
export class DigitalGaugeDemoComponent implements OnInit {
  value$: Observable<number>;
  form: FormGroup;
  styles = styles;

  constructor() {
    this.form = new FormGroup({
      min: new FormControl(styles[0].min),
      max: new FormControl(styles[0].max),
      unit: new FormControl(styles[0].unit),
      defaultColor: new FormControl(styles[0].defaultColor),
      fontColor: new FormControl(styles[0].fontColor),
      unitColor: new FormControl(styles[0].unitColor),
      backgroundColor: new FormControl(styles[0].backgroundColor),
      outerBackgroundColor: new FormControl(styles[0].outerBackgroundColor),
      underlineColor: new FormControl(styles[0].underlineColor),
      normalColor: new FormControl(styles[0].normalColor),
      warnColor: new FormControl(styles[0].warnColor),
      dangerColor: new FormControl(styles[0].dangerColor),
      warnThreshold: new FormControl(styles[0].warnThreshold),
      dangerThreshold: new FormControl(styles[0].dangerThreshold),
      strokeWidth: new FormControl(styles[0].strokeWidth)
    });
  }

  ngOnInit() {
    this.value$ = Observable.create((observer: Observer<number>) => {
      setInterval(() => {
        const value = Math.sin(new Date().getTime() / 5000) * 50 + 50;
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
