import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrioritizedPointSelectionGroupComponent} from './prioritized-point-selection-group.component';

describe('PrioritizedPointSelectionGroupComponent', () => {
  let component: PrioritizedPointSelectionGroupComponent;
  let fixture: ComponentFixture<PrioritizedPointSelectionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrioritizedPointSelectionGroupComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioritizedPointSelectionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
