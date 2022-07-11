import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantaneaComponent } from './instantanea.component';

describe('InstantaneaComponent', () => {
  let component: InstantaneaComponent;
  let fixture: ComponentFixture<InstantaneaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstantaneaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantaneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
