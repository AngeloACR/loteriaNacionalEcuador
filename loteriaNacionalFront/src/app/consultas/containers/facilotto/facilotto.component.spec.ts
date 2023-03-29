import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilottoComponent } from './facilotto.component';

describe('FacilottoComponent', () => {
  let component: FacilottoComponent;
  let fixture: ComponentFixture<FacilottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
