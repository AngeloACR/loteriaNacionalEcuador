import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaNacionalBoletinComponent } from './loteria-nacional-boletin.component';

describe('LoteriaNacionalBoletinComponent', () => {
  let component: LoteriaNacionalBoletinComponent;
  let fixture: ComponentFixture<LoteriaNacionalBoletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteriaNacionalBoletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteriaNacionalBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
