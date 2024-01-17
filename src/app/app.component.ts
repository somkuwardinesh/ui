import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-105';

  name = "Dinesh";
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  user = {
    id: 1,
    name: "Salman",
    age: 55
  }
  show() {

    const navigationExtras: NavigationExtras = {
      state: {
        name: 'sgsdfg',
        id: 10,
        age: 67
      }
    };

    this.router.navigateByUrl('/receiver', navigationExtras);
  }

  ngOnInit(): void {
    // this.user =history.state;
  }

}
