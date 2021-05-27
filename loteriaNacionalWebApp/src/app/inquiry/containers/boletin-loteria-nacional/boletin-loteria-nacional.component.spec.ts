import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinLoteriaNacionalComponent } from './boletin-loteria-nacional.component';

describe('BoletinLoteriaNacionalComponent', () => {
  let component: BoletinLoteriaNacionalComponent;
  let fixture: ComponentFixture<BoletinLoteriaNacionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletinLoteriaNacionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletinLoteriaNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
