import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MeritFlawComponent} from './merit-flaw.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('MeritFlawComponent', () => {
  let component: MeritFlawComponent;
  let fixture: ComponentFixture<MeritFlawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeritFlawComponent],
      imports: [MatFormFieldModule, MatSelectModule, NoopAnimationsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeritFlawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
