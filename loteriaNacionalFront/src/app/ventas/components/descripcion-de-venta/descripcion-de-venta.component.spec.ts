import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionDeVentaComponent } from './descripcion-de-venta.component';

describe('DescripcionDeVentaComponent', () => {
  let component: DescripcionDeVentaComponent;
  let fixture: ComponentFixture<DescripcionDeVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionDeVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionDeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
