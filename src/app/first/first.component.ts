import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  paramsSub: any;
  name: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log('loaded Second');
   }


  ngOnInit(): void {

    console.log('loaded First');
    console.log("prama : ")

    // console.log("form state: " + this.router.getCurrentNavigation()?.extras.state);


    this.paramsSub = this.activatedRoute.params.subscribe(
      
      params => {

        console.log("prama : "+params['name'])

        console.log("prama : "+params['kaka'])


        this.name = params['name']
      }
    );


  }

}
