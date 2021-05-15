import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoBoletinComponent } from './lotto-boletin.component';

describe('LottoBoletinComponent', () => {
  let component: LottoBoletinComponent;
  let fixture: ComponentFixture<LottoBoletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoBoletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
