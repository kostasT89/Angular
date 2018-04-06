import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewComponent } from './image-view/image-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ImageViewComponent
  ],
  declarations: [
    ImageViewComponent
  ],
  entryComponents: [
    ImageViewComponent
  ]
})
export class ComponentsModule { }
