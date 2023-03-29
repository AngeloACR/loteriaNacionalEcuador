import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilottoBoletinComponent } from './facilotto-boletin.component';

describe('FacilottoBoletinComponent', () => {
  let component: FacilottoBoletinComponent;
  let fixture: ComponentFixture<FacilottoBoletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilottoBoletinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilottoBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
