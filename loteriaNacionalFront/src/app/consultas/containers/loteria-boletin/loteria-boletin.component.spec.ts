import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaBoletinComponent } from './loteria-boletin.component';

describe('LoteriaBoletinComponent', () => {
  let component: LoteriaBoletinComponent;
  let fixture: ComponentFixture<LoteriaBoletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoteriaBoletinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteriaBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
