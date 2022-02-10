import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaMillonariaComponent } from './la-millonaria.component';

describe('LaMillonariaComponent', () => {
  let component: LaMillonariaComponent;
  let fixture: ComponentFixture<LaMillonariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaMillonariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaMillonariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
