import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryTypeComponent } from './lottery-type.component';

describe('LotteryTypeComponent', () => {
  let component: LotteryTypeComponent;
  let fixture: ComponentFixture<LotteryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
