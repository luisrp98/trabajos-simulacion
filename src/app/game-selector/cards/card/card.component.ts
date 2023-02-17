import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() n: string = '';

  titulo: string = '';
  img: string = '';

  ngOnInit() {
    this.setData(this.n);
  }

  setData(n: string) {
    switch (n) {
      case '0':
        this.titulo = 'mamawebo';
        this.img = 'assets/img/logoQueen.png';
        break;
      case '1':
        this.titulo = 'Juego de la vida';
        this.img = 'assets/img/logoHeart.png';
        break;
    }
  }
}