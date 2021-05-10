import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SaveButtonComponent} from './save-button.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconTestingModule} from '@angular/material/icon/testing';
import {MatIcon} from '@angular/material/icon';

describe('SaveButtonComponent', () => {
  let component: SaveButtonComponent;
  let fixture: ComponentFixture<SaveButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveButtonComponent, MatIcon],
      imports: [MatDialogModule, MatIconTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
