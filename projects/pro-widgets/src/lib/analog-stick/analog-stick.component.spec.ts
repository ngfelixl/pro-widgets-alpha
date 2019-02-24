import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogStickComponent } from './analog-stick.component';

describe('AnalogStickComponent', () => {
  let component: AnalogStickComponent;
  let fixture: ComponentFixture<AnalogStickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalogStickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogStickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
