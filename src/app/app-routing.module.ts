import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './game-selector/cards/cards.component';
import { OchoreinasComponent } from './games/ochoreinas/ochoreinas.component';

const routes: Routes = [
  { path: 'ochoreinas', component: OchoreinasComponent },
  { path: '', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
