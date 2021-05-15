import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaNacionalConfiguradorComponent } from './loteria-nacional-configurador.component';

describe('LoteriaNacionalConfiguradorComponent', () => {
  let component: LoteriaNacionalConfiguradorComponent;
  let fixture: ComponentFixture<LoteriaNacionalConfiguradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteriaNacionalConfiguradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteriaNacionalConfiguradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
