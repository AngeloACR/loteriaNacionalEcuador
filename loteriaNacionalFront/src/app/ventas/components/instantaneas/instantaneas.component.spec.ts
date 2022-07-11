import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantaneasComponent } from './instantaneas.component';

describe('InstantaneasComponent', () => {
  let component: InstantaneasComponent;
  let fixture: ComponentFixture<InstantaneasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstantaneasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantaneasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
