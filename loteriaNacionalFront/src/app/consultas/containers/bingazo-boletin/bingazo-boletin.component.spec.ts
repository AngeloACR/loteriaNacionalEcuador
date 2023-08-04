import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingazoBoletinComponent } from './bingazo-boletin.component';

describe('BingazoBoletinComponent', () => {
  let component: BingazoBoletinComponent;
  let fixture: ComponentFixture<BingazoBoletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingazoBoletinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingazoBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
