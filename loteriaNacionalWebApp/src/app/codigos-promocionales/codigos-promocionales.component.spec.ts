import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigosPromocionalesComponent } from './codigos-promocionales.component';

describe('CodigosPromocionalesComponent', () => {
  let component: CodigosPromocionalesComponent;
  let fixture: ComponentFixture<CodigosPromocionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigosPromocionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigosPromocionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
