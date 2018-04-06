import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewComponent } from './image-view.component';
import { MatDialogModule, MatDialogRef, MatDialog , MAT_DIALOG_DATA} from '@angular/material';

describe('ImageViewComponent', () => {
  let component: ImageViewComponent;
  let fixture: ComponentFixture<ImageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule  ],
      declarations: [ ImageViewComponent ],
      providers: [ { provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
