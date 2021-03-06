import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrioritySelectionComponent} from './priority-selection.component';

describe('PrioritySelectionComponent', () => {
  let component: PrioritySelectionComponent;
  let fixture: ComponentFixture<PrioritySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrioritySelectionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioritySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
