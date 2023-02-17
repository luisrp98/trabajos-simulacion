import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-game',
  templateUrl: './img-game.component.html',
  styleUrls: ['./img-game.component.sass'],
})
export class ImgGameComponent implements OnInit {
  @Input()
  n: string = '';

  titulo: string = '';
  img: string = '';

  constructor() {
    console.log('ImgGameComponent');
  }

  ngOnInit() {
    console.log(this.n + 'AAAAAAAAAAAAAA');
    this.setData(this.n);
  }

  // @Input() game: string = '';

  // // public title: string[] = [
  // //   '8 Reinas',
  // //   'Juego de la vida',
  // //   'Juego del Caos',
  // //   'Fractal de Mandelbort',
  // // ];
  // public logo = 'assets/img/logoQueen.png';

  // test() {
  //   console.log(this.game);
  //   console.log('img game component');
  // }
  setData(n: string) {
    switch (n) {
      case '0':
        this.titulo = '8 Reinas';
        this.img = 'assets/img/logoQueen.png';
        console.log('mamawebo switch');
        break;
      case '1':
        this.titulo = 'Juego de la vida';
        this.img = 'assets/img/logoHeart.png';
        console.log('mamawebo switch MALO');
        break;
    }
  }
}
