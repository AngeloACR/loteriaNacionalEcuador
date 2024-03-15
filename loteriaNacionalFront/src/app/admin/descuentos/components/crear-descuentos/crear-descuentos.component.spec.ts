import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDescuentosComponent } from './crear-descuentos.component';

describe('CrearDescuentosComponent', () => {
  let component: CrearDescuentosComponent;
  let fixture: ComponentFixture<CrearDescuentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDescuentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDescuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
