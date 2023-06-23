import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoResultadoComponent } from './ultimo-resultado.component';

describe('UltimoResultadoComponent', () => {
  let component: UltimoResultadoComponent;
  let fixture: ComponentFixture<UltimoResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimoResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimoResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
