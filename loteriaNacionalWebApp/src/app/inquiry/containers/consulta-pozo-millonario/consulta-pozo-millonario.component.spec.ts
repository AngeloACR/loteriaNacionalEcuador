import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPozoMillonarioComponent } from './consulta-pozo-millonario.component';

describe('ConsultaPozoMillonarioComponent', () => {
  let component: ConsultaPozoMillonarioComponent;
  let fixture: ComponentFixture<ConsultaPozoMillonarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPozoMillonarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPozoMillonarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
