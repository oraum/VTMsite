import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FreebiesComponent} from './freebies.component';

describe('FreebiesComponent', () => {
  let component: FreebiesComponent;
  let fixture: ComponentFixture<FreebiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreebiesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreebiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
