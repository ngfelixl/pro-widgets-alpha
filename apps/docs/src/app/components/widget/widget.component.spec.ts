import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { WidgetComponent } from './widget.component';
import { Directive, Component, Input, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule, setupTestingRouter } from '@angular/router/testing';
import { WidgetHostDirective } from 'src/app/directive/widget-host.directive';
import { By } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, APP_BASE_HREF } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { skip } from 'rxjs/operators';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import * as widgets from '../../data/widgets/index';


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

@Component({selector: 'pro-gauge', template: ''})
class GaugeComponent {}


const routes = [
  {path: 'widgets/:id', component: WidgetComponent},
  {path: 'page-not-found', component: PageNotFound}
]

class MockActivatedRoute {
  state = new BehaviorSubject<any>({id: null});

  get params() {
    return this.state.asObservable().pipe(skip(1));
  }

  setParams(state: any) {
    this.state.next(state);
  }
}

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;
  let activatedRoute: MockActivatedRoute;

  

  beforeEach(async(() => {
    
    spyOnProperty(widgets, 'widgets').and.returnValue({
      gauge: {
        name: 'Gauge',
        component: GaugeComponent,
        module: 'GaugeModule',
        dataFieldName: 'value',
        valueGenerator: () => 0
      }
    });


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
        WidgetHostDirective,
        GaugeComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [widgets['gauge'].component]
      }
    });

    TestBed.compileComponents();

    activatedRoute = TestBed.get(ActivatedRoute);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should extract the widget ID from the route', fakeAsync(() => {
    activatedRoute.setParams({id: 'gauge'});
    tick(1);
    expect(component.id).toBe('gauge');
  }));

  xit('should redirect to the page-not-found route when no widget was found', async () => {
    // const spy = spyOn(router, 'navigate');
    // await router.navigate(['widgets/i-do-not-exist']);
    //expect(spy).toHaveBeenCalledWith(['/page-not-found']);

    // let navigateSpy = spyOn(router.routerState.snapshot.url, 'navigate');
    // router.navigate(['page-not-found']);
    // fixture.detectChanges();
    // expect(router.routerState.snapshot.toString()).toContain('page-not-found');
  });
});
