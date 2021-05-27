import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PozoMillonarioConfiguradorComponent } from './pozo-millonario-configurador.component';

describe('PozoMillonarioConfiguradorComponent', () => {
  let component: PozoMillonarioConfiguradorComponent;
  let fixture: ComponentFixture<PozoMillonarioConfiguradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PozoMillonarioConfiguradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PozoMillonarioConfiguradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
