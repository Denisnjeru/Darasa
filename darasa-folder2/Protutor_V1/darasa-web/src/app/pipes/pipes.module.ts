import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcludeByPipe } from './exclude-by.pipe';


@NgModule({
  declarations: [
    ExcludeByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExcludeByPipe
  ]
})
export class PipesModule { }
