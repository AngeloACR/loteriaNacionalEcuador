import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PozoMillonarioSelectorComponent } from './pozo-millonario-selector.component';

describe('PozoMillonarioSelectorComponent', () => {
  let component: PozoMillonarioSelectorComponent;
  let fixture: ComponentFixture<PozoMillonarioSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PozoMillonarioSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PozoMillonarioSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
