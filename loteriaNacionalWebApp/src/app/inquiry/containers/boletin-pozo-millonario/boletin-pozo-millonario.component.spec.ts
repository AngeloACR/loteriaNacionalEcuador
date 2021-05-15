import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinPozoMillonarioComponent } from './boletin-pozo-millonario.component';

describe('BoletinPozoMillonarioComponent', () => {
  let component: BoletinPozoMillonarioComponent;
  let fixture: ComponentFixture<BoletinPozoMillonarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletinPozoMillonarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletinPozoMillonarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
