import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraDescripcionComponent } from './compra-descripcion.component';

describe('CompraDescripcionComponent', () => {
  let component: CompraDescripcionComponent;
  let fixture: ComponentFixture<CompraDescripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraDescripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
