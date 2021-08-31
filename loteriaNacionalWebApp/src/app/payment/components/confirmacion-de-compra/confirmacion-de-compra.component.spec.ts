import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionDeCompraComponent } from './confirmacion-de-compra.component';

describe('ConfirmacionDeCompraComponent', () => {
  let component: ConfirmacionDeCompraComponent;
  let fixture: ComponentFixture<ConfirmacionDeCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionDeCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
