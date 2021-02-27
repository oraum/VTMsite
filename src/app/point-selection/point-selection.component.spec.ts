import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PointSelectionComponent} from './point-selection.component';

describe('PointSelectionComponent', () => {
  let component: PointSelectionComponent;
  let fixture: ComponentFixture<PointSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointSelectionComponent]
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
