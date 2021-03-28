import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DisciplinesComponent} from './disciplines.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {PointSelectionComponent} from '../point-selection/point-selection.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatIcon} from '@angular/material/icon';
import {MatIconTestingModule} from '@angular/material/icon/testing';

describe('DisciplinesComponent', () => {
  let component: DisciplinesComponent;
  let fixture: ComponentFixture<DisciplinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisciplinesComponent, PointSelectionComponent, MatIcon],
      imports: [MatFormFieldModule, MatOptionModule, MatSelectModule, NoopAnimationsModule, MatIconTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
