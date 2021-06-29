import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoSelectorComponent } from './lotto-selector.component';

describe('LottoSelectorComponent', () => {
  let component: LottoSelectorComponent;
  let fixture: ComponentFixture<LottoSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
