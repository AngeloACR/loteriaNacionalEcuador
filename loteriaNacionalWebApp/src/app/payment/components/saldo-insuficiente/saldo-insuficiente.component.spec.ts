import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoInsuficienteComponent } from './saldo-insuficiente.component';

describe('SaldoInsuficienteComponent', () => {
  let component: SaldoInsuficienteComponent;
  let fixture: ComponentFixture<SaldoInsuficienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaldoInsuficienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoInsuficienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
