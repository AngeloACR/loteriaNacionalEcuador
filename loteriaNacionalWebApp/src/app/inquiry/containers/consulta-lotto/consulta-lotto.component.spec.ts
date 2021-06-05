import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLottoComponent } from './consulta-lotto.component';

describe('ConsultaLottoComponent', () => {
  let component: ConsultaLottoComponent;
  let fixture: ComponentFixture<ConsultaLottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaLottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaLottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
