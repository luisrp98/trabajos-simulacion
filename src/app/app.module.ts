import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OchoreinasComponent } from './games/ochoreinas/ochoreinas.component';
import { GameSelectorModule } from './game-selector/game-selector.module';
import { JuegovidaComponent } from './games/juegovida/juegovida.component';
import { JuegocaosComponent } from './games/juegocaos/juegocaos.component';
import { FractalComponent } from './games/fractal/fractal.component';
import { TableroComponent } from './games/ochoreinas/tablero/tablero.component';

@NgModule({
  declarations: [
    AppComponent,
    OchoreinasComponent,
    JuegovidaComponent,
    JuegocaosComponent,
    FractalComponent,
    TableroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GameSelectorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
