import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { App } from './app';
import { SerieModule } from './serie/serie-module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    HttpClientModule,
    SerieModule   // <-- Aquí debe estar importado
  ],
  bootstrap: [App]
})
export class AppModule {}
