import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoConfiguradorComponent } from './lotto-configurador.component';

describe('LottoConfiguradorComponent', () => {
  let component: LottoConfiguradorComponent;
  let fixture: ComponentFixture<LottoConfiguradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoConfiguradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoConfiguradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
