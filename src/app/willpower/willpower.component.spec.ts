import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WillpowerComponent} from './willpower.component';
import {PointSelectionComponent} from '../point-selection/point-selection.component';
import {MatIcon} from '@angular/material/icon';
import {MatIconTestingModule} from '@angular/material/icon/testing';

describe('WillpowerComponent', () => {
  let component: WillpowerComponent;
  let fixture: ComponentFixture<WillpowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WillpowerComponent, PointSelectionComponent, MatIcon],
      imports: [MatIconTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillpowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
