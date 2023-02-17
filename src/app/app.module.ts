import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './shared/back-button/back-button.component';
import { OchoreinasComponent } from './games/ochoreinas/ochoreinas.component';
import { GameSelectorModule } from './game-selector/game-selector.module';

@NgModule({
  declarations: [AppComponent, BackButtonComponent, OchoreinasComponent],
  imports: [BrowserModule, AppRoutingModule, GameSelectorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
