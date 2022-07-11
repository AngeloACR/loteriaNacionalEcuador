import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillonariaComponent } from './millonaria.component';

describe('MillonariaComponent', () => {
  let component: MillonariaComponent;
  let fixture: ComponentFixture<MillonariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MillonariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MillonariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
