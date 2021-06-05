import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLoteriaNacionalComponent } from './consulta-loteria-nacional.component';

describe('ConsultaLoteriaNacionalComponent', () => {
  let component: ConsultaLoteriaNacionalComponent;
  let fixture: ComponentFixture<ConsultaLoteriaNacionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaLoteriaNacionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaLoteriaNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
