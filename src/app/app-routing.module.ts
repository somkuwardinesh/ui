import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp-details/emp/emp.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RecieverComponent } from './reciever/reciever.component';
import { SenderComponent } from './sender/sender.component';

const routes: Routes = [
  { path: 'emp-details', component: EmpComponent },

  { path: 'sender', component: SenderComponent },

  {
    path: 'first/:name', component: FirstComponent, //send a name with query
  },


  {
    path: 'go', component: FirstComponent,
    children: [
      {
        path: 'second',

        component: SecondComponent
        // loadChildren: () => import('./second/second.component').then(m => m.SecondComponent)

      }

      ,
    ],





    data: { kaka: "LAGAA" } // send static data
  },

  {
    path: 'receiver',
    component: RecieverComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
