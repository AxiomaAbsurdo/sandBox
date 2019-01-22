import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //@Output() sendMsgToCard = new EventEmitter<void>();
  userMsg: string;

  title = 'oneWindowsManyTools';
  showInput = false;

  showMsBox(){
    this.showInput = true;
  }



}
