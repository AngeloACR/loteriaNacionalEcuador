import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLaMillonariaComponent } from './consulta-la-millonaria.component';

describe('ConsultaLaMillonariaComponent', () => {
  let component: ConsultaLaMillonariaComponent;
  let fixture: ComponentFixture<ConsultaLaMillonariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaLaMillonariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaLaMillonariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
