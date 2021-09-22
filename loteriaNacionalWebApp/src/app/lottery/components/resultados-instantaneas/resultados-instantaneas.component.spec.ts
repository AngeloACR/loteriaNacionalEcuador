import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosInstantaneasComponent } from './resultados-instantaneas.component';

describe('ResultadosInstantaneasComponent', () => {
  let component: ResultadosInstantaneasComponent;
  let fixture: ComponentFixture<ResultadosInstantaneasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosInstantaneasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosInstantaneasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
