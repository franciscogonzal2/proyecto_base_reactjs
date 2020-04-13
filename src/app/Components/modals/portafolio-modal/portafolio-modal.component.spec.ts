import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioModalComponent } from './portafolio-modal.component';

describe('PortafolioModalComponent', () => {
  let component: PortafolioModalComponent;
  let fixture: ComponentFixture<PortafolioModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
