import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './shared/back-button/back-button.component';
import { OchoreinasComponent } from './games/ochoreinas/ochoreinas.component';
import { GameSelectorModule } from './game-selector/game-selector.module';
import { JuegovidaComponent } from './games/juegovida/juegovida.component';
import { JuegocaosComponent } from './games/juegocaos/juegocaos.component';
import { FractalComponent } from './games/fractal/fractal.component';

@NgModule({
  declarations: [AppComponent, BackButtonComponent, OchoreinasComponent, JuegovidaComponent, JuegocaosComponent, FractalComponent],
  imports: [BrowserModule, AppRoutingModule, GameSelectorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
