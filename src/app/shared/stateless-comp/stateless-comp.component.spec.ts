/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatelessCompComponent } from './stateless-comp.component';

describe('StatelessCompComponent', () => {
  let component: StatelessCompComponent;
  let fixture: ComponentFixture<StatelessCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatelessCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatelessCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
