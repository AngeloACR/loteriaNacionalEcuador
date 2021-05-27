import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinLottoComponent } from './boletin-lotto.component';

describe('BoletinLottoComponent', () => {
  let component: BoletinLottoComponent;
  let fixture: ComponentFixture<BoletinLottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletinLottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletinLottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
