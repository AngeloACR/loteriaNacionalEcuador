import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosLaMillonariaComponent } from './resultados-la-millonaria.component';

describe('ResultadosLaMillonariaComponent', () => {
  let component: ResultadosLaMillonariaComponent;
  let fixture: ComponentFixture<ResultadosLaMillonariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosLaMillonariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosLaMillonariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
