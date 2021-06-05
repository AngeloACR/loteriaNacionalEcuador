import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosLottoComponent } from './resultados-lotto.component';

describe('ResultadosLottoComponent', () => {
  let component: ResultadosLottoComponent;
  let fixture: ComponentFixture<ResultadosLottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosLottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosLottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
