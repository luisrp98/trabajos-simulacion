import {
  Component,
  Renderer2,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.sass'],
})
export class TableroComponent {
  queenImg: string = 'assets/img/queen.png';

  getClick(event: any) {
    // Get the source element
    let element = event.target || event.srcElement || event.currentTarget;
    //Get the id of the source element
    console.log(element.id);
  }

  // @Input()
  // clicked: boolean = false;

  // // getClick(event: any) {
  // //   // Get the source element
  // //   let element = event.target || event.srcElement || event.currentTarget;
  // //   // Get the id of the source element
  // //   this.setImg(element.id);
  // // }
  // setImg(id: string) {
  //   (<HTMLInputElement>document.getElementById(id)).value;

  //   let imgTag: string = `<img src="${this.queenImg}" alt="">`;
  //   console.log(id);
  // }
}
