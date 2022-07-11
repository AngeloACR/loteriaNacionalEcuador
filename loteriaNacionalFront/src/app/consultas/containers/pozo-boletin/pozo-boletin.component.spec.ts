import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PozoBoletinComponent } from './pozo-boletin.component';

describe('PozoBoletinComponent', () => {
  let component: PozoBoletinComponent;
  let fixture: ComponentFixture<PozoBoletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PozoBoletinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PozoBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
