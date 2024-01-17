import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent implements OnInit {



  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    console.log("REciever ")
    console.log("form state: " + this.router.getCurrentNavigation()?.extras.state);


    const navigation = this.router.getCurrentNavigation();

    const state = navigation?.extras.state as {
      id: number
      name: string,
      age: number
    };

    console.log("REciever name  :" + state?.name) // retrive data from 

    console.log("REciever  history name  :" + history.state['name'])

    this.activatedRoute.params.subscribe((params: Params) => {

      console.log("REciever Param name  :" + params['name'])
    });


  }

}
