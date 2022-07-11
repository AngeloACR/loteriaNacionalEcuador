import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDeJuegoComponent } from './boton-de-juego.component';

describe('BotonDeJuegoComponent', () => {
  let component: BotonDeJuegoComponent;
  let fixture: ComponentFixture<BotonDeJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonDeJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonDeJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
