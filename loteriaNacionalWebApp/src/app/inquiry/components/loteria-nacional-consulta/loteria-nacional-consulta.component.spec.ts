import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaNacionalConsultaComponent } from './loteria-nacional-consulta.component';

describe('LoteriaNacionalConsultaComponent', () => {
  let component: LoteriaNacionalConsultaComponent;
  let fixture: ComponentFixture<LoteriaNacionalConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteriaNacionalConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteriaNacionalConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
