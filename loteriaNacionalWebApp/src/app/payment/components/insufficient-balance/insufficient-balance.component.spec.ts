import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsufficientBalanceComponent } from './insufficient-balance.component';

describe('InsufficientBalanceComponent', () => {
  let component: InsufficientBalanceComponent;
  let fixture: ComponentFixture<InsufficientBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsufficientBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsufficientBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
