import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaforlioViewsComponent } from './portaforlio-views.component';

describe('PortaforlioViewsComponent', () => {
  let component: PortaforlioViewsComponent;
  let fixture: ComponentFixture<PortaforlioViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortaforlioViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortaforlioViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
