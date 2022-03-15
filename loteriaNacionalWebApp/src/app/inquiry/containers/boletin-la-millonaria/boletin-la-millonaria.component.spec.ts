import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinLaMillonariaComponent } from './boletin-la-millonaria.component';

describe('BoletinLaMillonariaComponent', () => {
  let component: BoletinLaMillonariaComponent;
  let fixture: ComponentFixture<BoletinLaMillonariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletinLaMillonariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletinLaMillonariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
