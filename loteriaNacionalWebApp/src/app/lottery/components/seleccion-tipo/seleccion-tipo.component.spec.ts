import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionTipoComponent } from './seleccion-tipo.component';

describe('SeleccionTipoComponent', () => {
  let component: SeleccionTipoComponent;
  let fixture: ComponentFixture<SeleccionTipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionTipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
