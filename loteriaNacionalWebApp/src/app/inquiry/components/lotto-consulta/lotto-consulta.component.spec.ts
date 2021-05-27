import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoConsultaComponent } from './lotto-consulta.component';

describe('LottoConsultaComponent', () => {
  let component: LottoConsultaComponent;
  let fixture: ComponentFixture<LottoConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
