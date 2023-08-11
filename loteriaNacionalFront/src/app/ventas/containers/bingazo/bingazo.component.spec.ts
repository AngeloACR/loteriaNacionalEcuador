import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingazoComponent } from './bingazo.component';

describe('BingazoComponent', () => {
  let component: BingazoComponent;
  let fixture: ComponentFixture<BingazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingazoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
