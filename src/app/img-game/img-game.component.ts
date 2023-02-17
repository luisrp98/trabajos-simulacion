import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-game',
  templateUrl: './img-game.component.html',
  styleUrls: ['./img-game.component.sass'],
})
export class ImgGameComponent {
  @Input() game: string = '';

  // public title: string[] = [
  //   '8 Reinas',
  //   'Juego de la vida',
  //   'Juego del Caos',
  //   'Fractal de Mandelbort',
  // ];
  public logo = 'assets/img/logoQueen.png';

  test() {
    console.log(this.game);
    console.log('img game component');
  }
}
