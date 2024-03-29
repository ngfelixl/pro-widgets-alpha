import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlebarComponent } from './titlebar.component';
import { Component } from '@angular/core';

// tslint:disable-next-line:component-selector
@Component({ selector: 'mat-toolbar', template: '' })
class ToolbarComponent {}

@Component({selector: 'mat-icon', template: ''})
class MatIcon {}

describe('TitlebarComponent', () => {
  let component: TitlebarComponent;
  let fixture: ComponentFixture<TitlebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TitlebarComponent,
        ToolbarComponent,
        MatIcon
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
