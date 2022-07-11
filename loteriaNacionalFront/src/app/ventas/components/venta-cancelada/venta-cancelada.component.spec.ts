import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaCanceladaComponent } from './venta-cancelada.component';

describe('VentaCanceladaComponent', () => {
  let component: VentaCanceladaComponent;
  let fixture: ComponentFixture<VentaCanceladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaCanceladaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaCanceladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
