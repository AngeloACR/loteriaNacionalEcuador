import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PozoMillonarioComponent } from './pozo-millonario.component';

describe('PozoMillonarioComponent', () => {
  let component: PozoMillonarioComponent;
  let fixture: ComponentFixture<PozoMillonarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PozoMillonarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PozoMillonarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
