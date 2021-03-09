import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrioritySelectionComponent} from './priority-selection.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('PrioritySelectionComponent', () => {
  let component: PrioritySelectionComponent;
  let fixture: ComponentFixture<PrioritySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrioritySelectionComponent],
      imports: [MatFormFieldModule, MatSelectModule, NoopAnimationsModule]
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
