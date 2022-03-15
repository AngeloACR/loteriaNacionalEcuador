import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaMillonariaSelectorComponent } from './la-millonaria-selector.component';

describe('LaMillonariaSelectorComponent', () => {
  let component: LaMillonariaSelectorComponent;
  let fixture: ComponentFixture<LaMillonariaSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaMillonariaSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaMillonariaSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
