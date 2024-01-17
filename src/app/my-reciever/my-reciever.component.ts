import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-reciever',
  templateUrl: './my-reciever.component.html',
  styleUrls: ['./my-reciever.component.css']
})
export class MyRecieverComponent {

  @Input()
  msg_s:string = '';

  @Output() myBackMsg = new EventEmitter<string>();

  sendDataBack(value:string){
    this.myBackMsg.emit(value);
  }
}
