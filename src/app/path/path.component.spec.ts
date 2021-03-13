import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PathComponent} from './path.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {PointSelectionComponent} from '../point-selection/point-selection.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatIcon} from '@angular/material/icon';
import {MatIconTestingModule} from '@angular/material/icon/testing';

describe('PathComponent', () => {
  let component: PathComponent;
  let fixture: ComponentFixture<PathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PathComponent, PointSelectionComponent, MatIcon],
      imports: [MatFormFieldModule, MatSelectModule, NoopAnimationsModule, MatIconTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
