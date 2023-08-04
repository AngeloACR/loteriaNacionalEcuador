import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionDeVentaComponent } from './confirmacion-de-venta.component';

describe('ConfirmacionDeVentaComponent', () => {
  let component: ConfirmacionDeVentaComponent;
  let fixture: ComponentFixture<ConfirmacionDeVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionDeVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionDeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
