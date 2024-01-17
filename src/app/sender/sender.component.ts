import { Component } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {


  // msg = "Hello bro!!!"
  msg:string='';

  backMsg:string='';

  getbackInfo(value:any){
    this.backMsg = value;
    console.log('my back value:  '+value);
  }


  sendMsg(value:any){
    this.msg =  value;
  }
}
