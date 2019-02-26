import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalGaugeComponent } from './digital-gauge.component';

describe('DigitalGaugeComponent', () => {
  let component: DigitalGaugeComponent;
  let fixture: ComponentFixture<DigitalGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
