import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PozoMillonarioConsultaComponent } from './pozo-millonario-consulta.component';

describe('PozoMillonarioConsultaComponent', () => {
  let component: PozoMillonarioConsultaComponent;
  let fixture: ComponentFixture<PozoMillonarioConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PozoMillonarioConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PozoMillonarioConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
