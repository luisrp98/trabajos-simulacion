import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';

@NgModule({
  declarations: [CardsComponent, CardComponent],
  imports: [CommonModule],
  exports: [CardsComponent],
})
export class GameSelectorModule {}
