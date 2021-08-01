import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLoteriaComponent } from './info-loteria.component';

describe('InfoLoteriaComponent', () => {
  let component: InfoLoteriaComponent;
  let fixture: ComponentFixture<InfoLoteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoLoteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLoteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
