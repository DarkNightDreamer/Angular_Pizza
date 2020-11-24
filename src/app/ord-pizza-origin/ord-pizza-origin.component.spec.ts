import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdPizzaOriginComponent } from './ord-pizza-origin.component';

describe('OrdPizzaOriginComponent', () => {
  let component: OrdPizzaOriginComponent;
  let fixture: ComponentFixture<OrdPizzaOriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdPizzaOriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdPizzaOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
