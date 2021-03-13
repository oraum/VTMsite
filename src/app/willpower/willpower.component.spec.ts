import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WillpowerComponent} from './willpower.component';

describe('WillpowerComponent', () => {
  let component: WillpowerComponent;
  let fixture: ComponentFixture<WillpowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WillpowerComponent]
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
