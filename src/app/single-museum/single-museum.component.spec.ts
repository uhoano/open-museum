import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMuseumComponent } from './single-museum.component';

describe('SingleMuseumComponent', () => {
  let component: SingleMuseumComponent;
  let fixture: ComponentFixture<SingleMuseumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMuseumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
