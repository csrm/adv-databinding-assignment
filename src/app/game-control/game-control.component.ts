import { Component, Output, EventEmitter } from '@angular/core';

@Component({
 selector: 'app-game-control',
 templateUrl: './game-control.component.html',
 styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
 disableBtn = true;
 counter = 0;
 ref = 0;
 @Output() startClicked = new EventEmitter<number>();

 startCounter() {
   this.disableBtn = !this.disableBtn;
   console.log(this.counter);
   this.ref = setInterval(()=> { this.counter = this.counter + 1; this.startClicked.emit(this.counter);  }, 1000);
 }

 stopCounter() {
   this.disableBtn = !this.disableBtn;
   clearInterval(this.ref);
 }
}
