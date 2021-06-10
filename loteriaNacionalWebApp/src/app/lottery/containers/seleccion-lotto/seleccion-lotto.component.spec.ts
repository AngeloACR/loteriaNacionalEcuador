import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionLottoComponent } from './seleccion-lotto.component';

describe('SeleccionLottoComponent', () => {
  let component: SeleccionLottoComponent;
  let fixture: ComponentFixture<SeleccionLottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionLottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionLottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
