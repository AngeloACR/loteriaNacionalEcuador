import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraCanceladaComponent } from './compra-cancelada.component';

describe('CompraCanceladaComponent', () => {
  let component: CompraCanceladaComponent;
  let fixture: ComponentFixture<CompraCanceladaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraCanceladaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraCanceladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
