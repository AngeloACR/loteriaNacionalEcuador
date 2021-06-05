import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPozoMillonarioComponent } from './resultados-pozo-millonario.component';

describe('ResultadosPozoMillonarioComponent', () => {
  let component: ResultadosPozoMillonarioComponent;
  let fixture: ComponentFixture<ResultadosPozoMillonarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosPozoMillonarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosPozoMillonarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
