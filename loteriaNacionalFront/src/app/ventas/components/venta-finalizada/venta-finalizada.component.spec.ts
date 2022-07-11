import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaFinalizadaComponent } from './venta-finalizada.component';

describe('VentaFinalizadaComponent', () => {
  let component: VentaFinalizadaComponent;
  let fixture: ComponentFixture<VentaFinalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaFinalizadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaFinalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
