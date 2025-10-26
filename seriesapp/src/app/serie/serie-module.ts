import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieList } from './serie-list/serie-list';

@NgModule({
  declarations: [
    SerieList
  ],
  imports: [
    CommonModule
  ],
  exports: [SerieList],
})
export class SerieModule { }
