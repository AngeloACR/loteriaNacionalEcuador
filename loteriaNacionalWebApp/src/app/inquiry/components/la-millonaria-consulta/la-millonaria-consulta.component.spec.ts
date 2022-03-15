import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaMillonariaConsultaComponent } from './la-millonaria-consulta.component';

describe('LaMillonariaConsultaComponent', () => {
  let component: LaMillonariaConsultaComponent;
  let fixture: ComponentFixture<LaMillonariaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaMillonariaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaMillonariaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
