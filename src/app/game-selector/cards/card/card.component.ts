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
  link: string = '';

  ngOnInit() {
    this.setData(this.n);
  }

  setData(n: string) {
    switch (n) {
      case '0':
        this.titulo = '8 Reinas';
        this.img = 'assets/img/logoQueen.png';
        this.link = 'ochoreinas';
        break;
      case '1':
        this.titulo = 'Juego de la Vida';
        this.img = 'assets/img/logoHeart.png';
        this.link = 'juegovida';
        break;
      case '2':
        this.titulo = 'Juego del Caos';
        this.img = 'assets/img/logoChaos.png';
        this.link = 'juegocaos';
        break;
      case '3':
        this.titulo = 'Fractal de Mandelbrot';
        this.img = 'assets/img/logoFractal.png';
        this.link = 'juegovida';
        break;
    }
  }
}
