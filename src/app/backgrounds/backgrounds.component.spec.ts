import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BackgroundsComponent} from './backgrounds.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {PointSelectionComponent} from '../point-selection/point-selection.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatIcon} from '@angular/material/icon';
import {MatIconTestingModule} from '@angular/material/icon/testing';

describe('BackgroundsComponent', () => {
  let component: BackgroundsComponent;
  let fixture: ComponentFixture<BackgroundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackgroundsComponent, PointSelectionComponent, MatIcon],
      imports: [MatFormFieldModule, MatSelectModule, NoopAnimationsModule, MatIconTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
