import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiensteComponent } from './list-dienste.component';

describe('ListDiensteComponent', () => {
  let component: ListDiensteComponent;
  let fixture: ComponentFixture<ListDiensteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDiensteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDiensteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
