import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaMillonariaBoletinComponent } from './la-millonaria-boletin.component';

describe('LaMillonariaBoletinComponent', () => {
  let component: LaMillonariaBoletinComponent;
  let fixture: ComponentFixture<LaMillonariaBoletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaMillonariaBoletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaMillonariaBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
