import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  paramsSub: any;
  name: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log('loaded Second');
   }


  ngOnInit(): void {

    console.log('loaded Second');

    this.paramsSub = this.activatedRoute.params.subscribe(
      
      params => {

        console.log("prama : "+params['kaka'])


        this.name = params['kaka']
      }
    );


  }

}
