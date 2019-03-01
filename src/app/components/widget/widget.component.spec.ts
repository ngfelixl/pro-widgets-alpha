import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponent } from './widget.component';
import { Directive, Component, Input, ViewContainerRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

@Directive({selector: 'appWidgetHost'})
class AppWidgetHost {constructor(public viewContainerRef: ViewContainerRef) {}}

@Directive({selector: 'matInput'})
class MatInput {}

@Component({selector: 'mat-form-field', template: '<ng-content></ng-content>'})
class MatFormField {}

@Component({selector: 'mat-select', template: '<ng-content></ng-content>'})
class MatSelect {@Input() value: any;}

@Component({selector: 'mat-option', template: '<ng-content></ng-content>'})
class MatOption {@Input() value: any;}

@Component({selector: 'mat-tab-group', template: '<ng-content></ng-content>'})
class MatTabGroup {}

@Component({selector: 'mat-tab', template: '<ng-content></ng-content>'})
class MatTab {@Input() label: string;}

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WidgetComponent,
        AppWidgetHost,
        MatInput,
        MatFormField,
        MatSelect,
        MatOption,
        MatTabGroup,
        MatTab
      ],
      imports: [ ReactiveFormsModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
