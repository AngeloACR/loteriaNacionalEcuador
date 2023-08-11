import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillonariaBoletinComponent } from './millonaria-boletin.component';

describe('MillonariaBoletinComponent', () => {
  let component: MillonariaBoletinComponent;
  let fixture: ComponentFixture<MillonariaBoletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MillonariaBoletinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MillonariaBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
