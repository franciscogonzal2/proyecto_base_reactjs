import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanaDineroComponent } from './gana-dinero.component';

describe('GanaDineroComponent', () => {
  let component: GanaDineroComponent;
  let fixture: ComponentFixture<GanaDineroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanaDineroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanaDineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
