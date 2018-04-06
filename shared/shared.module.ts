import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule,
    ComponentsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule,
    ComponentsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' }
  ]
})
export class SharedModule { }
