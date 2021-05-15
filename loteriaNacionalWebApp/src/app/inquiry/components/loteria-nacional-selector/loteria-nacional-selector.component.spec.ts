import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaNacionalSelectorComponent } from './loteria-nacional-selector.component';

describe('LoteriaNacionalSelectorComponent', () => {
  let component: LoteriaNacionalSelectorComponent;
  let fixture: ComponentFixture<LoteriaNacionalSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteriaNacionalSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteriaNacionalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
