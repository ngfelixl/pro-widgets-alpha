import { Component, Input, OnChanges, AfterViewInit, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pro-digital-gauge',
  templateUrl: './digital-gauge.component.html',
  styleUrls: [ './digital-gauge.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitalGaugeComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() value = 0;
  @Input() backgroundColor = '#424242';
  @Input() defaultColor = 'white';
  @Input() normalColor = 'red';
  @Input() warnColor = 'red';
  @Input() dangerColor = 'red';
  @Input() fontColor = '#d0d0d0';
  @Input() unitColor = '#a0a0a0';
  @Input() strokeWidth = 2;
  @Input() min = 0;
  @Input() max = 100;
  @Input() dangerThreshold = 100;
  @Input() warnThreshold = 100;
  @Input() unit = '°C';
  @ViewChild('stripeContainer') stripeContainer;
  private stripes: HTMLElement[];
  private lastInputValue: number = this.value;
  private lastValue: number;
  private range: number;
  private thresholds: {
    warn: number;
    danger: number;
  };
  private viewChecked = false;

  ngOnInit() {
    this.range = this.max - this.min;
  }

  ngOnChanges() {
    this.checkStyleChange();
    this.setStateChange();
  }

  ngAfterViewInit() {
    this.stripes = this.stripeContainer.nativeElement.getElementsByTagName('line');
    const percentage = (this.value - this.min) / this.range;
    let value = Math.round((this.stripes.length) * percentage);
    value = Math.max(0, value);
    value = Math.min(this.stripes.length - 1, value);
    this.lastValue = value;

    this.setThresholds();
    this.setInitialState();
    this.viewChecked = true;
  }

  setThresholds() {
    const warnPercentage = (this.warnThreshold - this.min) / this.range;
    const dangerPercentage = (this.dangerThreshold - this.min) / this.range;
    this.thresholds = {
      warn: Math.round((this.stripes.length) * warnPercentage),
      danger: Math.round((this.stripes.length) * dangerPercentage)
    };
  }

  /**
   * If the value property hasn't changed, one of the
   * style attributes must have changed.
   */
  private checkStyleChange() {
    if (this.lastInputValue === this.value) {
      this.setThresholds();
      this.setInitialState();
    }
    this.lastInputValue = this.value;
  }

  private setStateChange() {
    if (this.viewChecked) {
      const percentage = (this.value - this.min) / this.range;
      let value = Math.round((this.stripes.length) * percentage);
      value = Math.max(0, value);
      value = Math.min(this.stripes.length - 1, value);

      const difference = value - this.lastValue;

      if (difference !== 0) {
        const delta = difference > 0 ? 1 : -1;
        for (let i = this.lastValue; i * delta <= value * delta; i = i + delta) {
          const index = this.stripes.length - 1 - i;
          if (delta > 0) {
            this.setActiveStrokeColor(i);
          } else {
            this.stripes[index].setAttribute('stroke', this.defaultColor);
          }
        }
      }
      this.lastValue = value;
    }
  }

  private setActiveStrokeColor(index: number) {
    const invertedIndex = this.stripes.length - 1 - index;
    if (index > this.thresholds.danger) {
      this.stripes[invertedIndex].setAttribute('stroke', this.dangerColor);
    } else if (index > this.thresholds.warn) {
      this.stripes[invertedIndex].setAttribute('stroke', this.warnColor);
    } else {
      this.stripes[invertedIndex].setAttribute('stroke', this.normalColor);
    }
  }

  private setInitialState() {
    const percentage = (this.value - this.min) / this.range;
    let value = Math.ceil((this.stripes.length) * percentage);
    value = Math.max(0, value);
    value = Math.min(this.stripes.length - 1, value);

    for (let i = 0; i < this.stripes.length; i++) {
      const index = this.stripes.length - 1 - i;
      if (i < value) {
        this.setActiveStrokeColor(i);
      } else {
        this.stripes[index].setAttribute('stroke', this.defaultColor);
      }
    }
  }

  get roundedValue() {
    return Math.round(this.value);
  }
}
