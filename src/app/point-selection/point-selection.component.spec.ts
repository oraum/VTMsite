import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PointSelectionComponent} from './point-selection.component';
import {MatIcon} from '@angular/material/icon';
import {MatIconTestingModule} from '@angular/material/icon/testing';

describe('PointSelectionComponent', () => {
  let component: PointSelectionComponent;
  let fixture: ComponentFixture<PointSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointSelectionComponent, MatIcon],
      imports: [MatIconTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
