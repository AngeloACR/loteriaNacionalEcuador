import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pega3BoletinComponent } from './pega3-boletin.component';

describe('Pega3BoletinComponent', () => {
  let component: Pega3BoletinComponent;
  let fixture: ComponentFixture<Pega3BoletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pega3BoletinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pega3BoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
