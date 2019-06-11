import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNavbarComponent } from './template-navbar.component';

describe('TemplateNavbarComponent', () => {
  let component: TemplateNavbarComponent;
  let fixture: ComponentFixture<TemplateNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
