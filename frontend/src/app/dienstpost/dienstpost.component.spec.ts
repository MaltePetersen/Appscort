import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DienstpostComponent } from './dienstpost.component';

describe('DienstpostComponent', () => {
  let component: DienstpostComponent;
  let fixture: ComponentFixture<DienstpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DienstpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DienstpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
