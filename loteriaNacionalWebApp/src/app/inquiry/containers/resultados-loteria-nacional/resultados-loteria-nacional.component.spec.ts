import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosLoteriaNacionalComponent } from './resultados-loteria-nacional.component';

describe('ResultadosLoteriaNacionalComponent', () => {
  let component: ResultadosLoteriaNacionalComponent;
  let fixture: ComponentFixture<ResultadosLoteriaNacionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosLoteriaNacionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosLoteriaNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
