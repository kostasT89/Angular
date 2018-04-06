import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../shared/model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageViewComponent } from '../../shared/components/image-view/image-view.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {

  }

  viewImage() {
    const dialogRef = this.dialog.open(ImageViewComponent, {
      width: '500px',
      panelClass: 'no-padding',
      disableClose: true,
      data: { src: this.item.url }
    });
  }
}
