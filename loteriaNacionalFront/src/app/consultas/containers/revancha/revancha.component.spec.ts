import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevanchaComponent } from './revancha.component';

describe('RevanchaComponent', () => {
  let component: RevanchaComponent;
  let fixture: ComponentFixture<RevanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevanchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
