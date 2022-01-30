import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspasComponent } from './raspas.component';

describe('RaspasComponent', () => {
  let component: RaspasComponent;
  let fixture: ComponentFixture<RaspasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaspasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
