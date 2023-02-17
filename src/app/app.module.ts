import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './shared/back-button/back-button.component';
import { ImgGameComponent } from './img-game/img-game.component';

@NgModule({
  declarations: [AppComponent, BackButtonComponent, ImgGameComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
