import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { styles } from './themes';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-analog-stick-demo',
  templateUrl: `./analog-stick-demo.component.html`,
  styleUrls: [ './analog-stick-demo.component.scss' ]
})
export class AnalogStickDemoComponent implements OnInit {
  value$: Observable<[number, number]>;
  styles = styles;
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      color: new FormControl(styles[0].color),
      gradientStartColor: new FormControl(styles[0].gradientStartColor),
      gradientEndColor: new FormControl(styles[0].gradientEndColor),
      gradientBaseColor: new FormControl(styles[0].gradientBaseColor),
      sideColor: new FormControl(styles[0].sideColor),
      xLabel: new FormControl(styles[0].xLabel),
      yLabel: new FormControl(styles[0].yLabel)
    });
  }

  ngOnInit() {
    this.value$ = Observable.create((observer: Observer<[number, number]>) => {
      setInterval(() => {
        const angle = new Date().getTime() / 800;
        const position: [number, number] = [
          Math.round((Math.sin(angle) * 30 + 50) * 100) / 100,
          Math.round((Math.cos(angle) * 40 + 50) * 100) / 100
        ];
        observer.next(position);
      }, 30);
    }).pipe(
      startWith([50, 50])
    );
  }

  usePreset(style) {
    this.form.patchValue(style);
  }

  get style() {
    return this.form.getRawValue();
  }
}
