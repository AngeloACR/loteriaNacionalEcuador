import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoInstantaneaComponent } from './resultado-instantanea.component';

describe('ResultadoInstantaneaComponent', () => {
  let component: ResultadoInstantaneaComponent;
  let fixture: ComponentFixture<ResultadoInstantaneaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoInstantaneaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoInstantaneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
