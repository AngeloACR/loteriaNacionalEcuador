import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionPozoComponent } from './seleccion-pozo.component';

describe('SeleccionPozoComponent', () => {
  let component: SeleccionPozoComponent;
  let fixture: ComponentFixture<SeleccionPozoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionPozoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionPozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
