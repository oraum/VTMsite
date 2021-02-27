import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PointSelectionGroupComponent} from './point-selection-group.component';

describe('PointSelectionGroupComponent', () => {
  let component: PointSelectionGroupComponent;
  let fixture: ComponentFixture<PointSelectionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointSelectionGroupComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSelectionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
