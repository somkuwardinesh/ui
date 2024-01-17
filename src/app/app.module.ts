import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp-details/emp/emp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RecieverComponent } from './reciever/reciever.component';
import { SenderComponent } from './sender/sender.component';
import { MyRecieverComponent } from './my-reciever/my-reciever.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    FirstComponent,
    SecondComponent,
    RecieverComponent,
    SenderComponent,
    MyRecieverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
