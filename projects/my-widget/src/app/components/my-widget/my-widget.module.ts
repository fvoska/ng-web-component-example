import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWidgetComponent } from './my-widget.component';

@NgModule({
  declarations: [MyWidgetComponent],
  exports: [MyWidgetComponent],
  imports: [
    CommonModule
  ]
})
export class MyWidgetModule { }
