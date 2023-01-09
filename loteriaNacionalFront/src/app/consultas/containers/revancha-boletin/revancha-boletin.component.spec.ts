import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevanchaBoletinComponent } from './revancha-boletin.component';

describe('RevanchaBoletinComponent', () => {
  let component: RevanchaBoletinComponent;
  let fixture: ComponentFixture<RevanchaBoletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevanchaBoletinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevanchaBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
