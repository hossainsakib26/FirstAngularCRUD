import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee/create-employee.component';
import { DisplayEmployeeComponent } from './employee/display-employee/display-employee/display-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee/list-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsEmployeeComponent } from './employee/details-employee/details-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee/update-employee.component';
import { EmployeeService } from './services/employee.service';

const appRout: Routes = [
  { path: 'employees', component: ListEmployeeComponent },
  { path: 'employees/:id', component: DetailsEmployeeComponent  }, 
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'employees/update/:id', component: UpdateEmployeeComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    // FormsModule,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    ListEmployeeComponent,
    DetailsEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRout),
    FormsModule,
    HttpClientModule
  
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
