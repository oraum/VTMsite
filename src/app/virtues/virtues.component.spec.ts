import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VirtuesComponent} from './virtues.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {PointSelectionComponent} from '../point-selection/point-selection.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconTestingModule} from '@angular/material/icon/testing';
import {MatIcon} from '@angular/material/icon';

describe('VirtuesComponent', () => {
  let component: VirtuesComponent;
  let fixture: ComponentFixture<VirtuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VirtuesComponent, PointSelectionComponent, MatIcon],
      imports: [MatFormFieldModule, MatSelectModule, NoopAnimationsModule, MatIconTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
