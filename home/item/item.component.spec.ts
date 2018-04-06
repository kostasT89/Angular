import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogModule, MatDialogRef, MatDialog , MAT_DIALOG_DATA} from '@angular/material';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule, SharedModule ],
      declarations: [ ItemComponent ],
      providers: [ { provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have viewImage funciton', () => {
    expect(component.viewImage).toBeTruthy();
  });
});
