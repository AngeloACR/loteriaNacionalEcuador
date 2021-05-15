import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PozoMillonarioBoletinComponent } from './pozo-millonario-boletin.component';

describe('PozoMillonarioBoletinComponent', () => {
  let component: PozoMillonarioBoletinComponent;
  let fixture: ComponentFixture<PozoMillonarioBoletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PozoMillonarioBoletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PozoMillonarioBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
