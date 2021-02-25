import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharAttributesComponent } from './char-attributes.component';

describe('CharAttributesComponent', () => {
  let component: CharAttributesComponent;
  let fixture: ComponentFixture<CharAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
