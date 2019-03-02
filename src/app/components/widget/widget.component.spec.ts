import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponent } from './widget.component';
import { Directive, Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule, setupTestingRouter } from '@angular/router/testing';
import { WidgetHostDirective } from 'src/app/directive/widget-host.directive';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';


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

@Component({selector: 'page-not-found', template: '<span id="page-not-found"></span>'})
class PageNotFound {}

let router = {
  navigate: jasmine.createSpy('navigate')
}

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WidgetComponent,
        MatInput,
        MatFormField,
        MatSelect,
        MatOption,
        MatTabGroup,
        MatTab,
        PageNotFound,
        WidgetHostDirective
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([{path: 'page-not-found', component: PageNotFound}])
      ]
    })
    .compileComponents();
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to the page-not-found route when no widget was found', () => {
    // let navigateSpy = spyOn(router.routerState.snapshot.url, 'navigate');
    // router.navigate(['page-not-found']);
    // fixture.detectChanges();
    // expect(router.routerState.snapshot.toString()).toContain('page-not-found');
  });
});
