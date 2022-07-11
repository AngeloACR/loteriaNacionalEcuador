import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSorteoComponent } from './detalle-sorteo.component';

describe('DetalleSorteoComponent', () => {
  let component: DetalleSorteoComponent;
  let fixture: ComponentFixture<DetalleSorteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleSorteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSorteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
