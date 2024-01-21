import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Emp } from 'src/app/to/emp';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, map, of, retry, shareReplay } from 'rxjs';
import { ResponseTo } from 'src/app/to/response-to';
import { environment } from 'src/environments/environment';


const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Methods', 'GET')
  .set('Access-Control-Allow-Origin', 'http://api:8080/')
  .set('Access-Control-Allow-Credentials', 'true')
  .set('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X- Request-With');
  // .set('Access-Control-Allow-Origin', '*')
  // .set('Access-Control-Allow-Origin', 'https://reqres.in/');



@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {


  // baseURL: string = 'http://localhost:8080'
  baseURL: string = ''

  userss?: Emp[];

  users?: Emp;

  constructor( private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.baseURL = environment.API_URL
  }


  profileForm = this.fb.group({
    id: [''],
    firstName: [''],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zipCode: ['']
    }),
  });



  ngOnInit(): void {
    console.log('loaded Student  :  ' + environment.MESG);
    this.getStudent().subscribe(data => {
      console.log(data)
      this.userss = data.employees;

      console.log("User data from model :" + this.userss)

    })


    this.getStudent()
    .subscribe({
      next: response =>{
         console.log(response); 
         this.userss = response.employees
        //  let a = 0/12
        //  throw new Error('Value expected!');
      },
      error(err) { console.error('Got an Error: ' + err); },
      complete: () => { console.log('Completed'); }
    });

  }
  getStudent(): Observable<ResponseTo> {
    console.log(this.baseURL + "/emp")
    return this.http.get<ResponseTo>(this.baseURL + "/emp", { 'headers': headers }).pipe(
      shareReplay({ bufferSize: 1, refCount: false }),//need to check more
      map((res: any) => {
        // throw new Error('Value expected!');
        if (!res) {
          throw new Error('Value expected!');

          // throwError () ->new Error('Value expected!');
        }
        return res;
      }),
      /*
       * Catch the error, either from the AJAX call or from the map operator,
       * and return an observable of empty array.
       * The `catchError` argument must be a function that returns an observable.
       */
      retry(3),
      catchError(() => {
        console.log('Error occurd at calling API')
        // throw new Error('Value expected!');
        return of();
      })
    );
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value


    console.warn(this.profileForm.value);

    this.addStudent()
      .subscribe((response: any) => {
        console.log('Added the user/student/emp :' + response);
      });






    // this.route.re
    this.router.navigateByUrl('/')
    this.ngOnInit();

  }


  addStudent() {

    return this.http.post<any>(this.baseURL+"/emp", this.profileForm.value)

  }

  updateProfile() {

    this.updateStudent()
      .subscribe((response: any) => {
        console.log('Updated the user/student/emp :' + response);
      });

    this.router.navigateByUrl('/')
    this.ngOnInit();
  }


  updateStudent() {

    return this.http.put<any>(this.baseURL+"/emp", this.profileForm.value)

  }

  deleteEmp(id: any) {

    console.log("in delete : " + id);


    this.deleteStudentById(id)
      .subscribe((response: any) => {
        console.log(response);
      });

    console.log("current url :" + this.route.url);

    this.router.navigate(['/'])
    this.ngOnInit();
  }

  deleteStudentById(id: any): Observable<ResponseTo> {
    console.log(this.baseURL + "/emp")
    return this.http.delete<ResponseTo>(this.baseURL + "/emp/" + id, { 'headers': headers })
  }


  editEmp(id: any) {

    this.getStudentById(id).subscribe(data => {
      console.log(data)
      this.users = data.emp;



      console.log("User by id data from model :" + this.users?.firstName)

    })

    this.profileForm.patchValue({
      id: '' + this.users?.id,
      firstName: this.users?.firstName,
      lastName: this.users?.lastName,
      address: {
        street: this.users?.address?.street,
        city: this.users?.address?.city,
        state: this.users?.address?.state,
        zipCode: this.users?.address?.zipCode
      }
    });
  }


  getStudentById(id: any): Observable<ResponseTo> {
    console.log(this.baseURL + "/emp")
    return this.http.get<ResponseTo>(this.baseURL + "/emp/" + id, { 'headers': headers })
  }

}
