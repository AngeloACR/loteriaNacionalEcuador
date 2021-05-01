import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPurchaseComponent } from './completed-purchase.component';

describe('CompletedPurchaseComponent', () => {
  let component: CompletedPurchaseComponent;
  let fixture: ComponentFixture<CompletedPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
