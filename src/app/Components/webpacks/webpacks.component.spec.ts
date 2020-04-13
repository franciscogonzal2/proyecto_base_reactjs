import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpacksComponent } from './webpacks.component';

describe('WebpacksComponent', () => {
  let component: WebpacksComponent;
  let fixture: ComponentFixture<WebpacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebpacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
