import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './game-selector/cards/cards.component';
import { FractalComponent } from './games/fractal/fractal.component';
import { JuegocaosComponent } from './games/juegocaos/juegocaos.component';
import { JuegovidaComponent } from './games/juegovida/juegovida.component';
import { OchoreinasComponent } from './games/ochoreinas/ochoreinas.component';

const routes: Routes = [
  { path: 'ochoreinas', component: OchoreinasComponent },
  { path: 'juegovida', component: JuegovidaComponent },
  { path: 'juegocaos', component: JuegocaosComponent },
  { path: 'fractal', component: FractalComponent },
  { path: '', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
