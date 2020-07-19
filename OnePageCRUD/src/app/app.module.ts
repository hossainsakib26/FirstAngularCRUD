import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeService } from './service/employee-service/employee.service';
import { UpdateEmployeeService } from './service/employee-service/update-employee.service';
import { SetEmployeeSalaryComponent } from './humen-resource/set-employee-salary/set-employee-salary.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateDepartmentComponent } from "./department/create-department/create-department.component";
import { ListDepartmentComponent } from "./department/list-department/list-department.component";
import { DepartmetService } from "src/app/service/department-service/departmet.service";
import { GetDepartmentService } from './service/department-service/get-department.service';

const routes: Routes = [
  {path: 'employee', component: CreateEmployeeComponent},
  {path: 'setsalary', component: SetEmployeeSalaryComponent},
  {path: 'department', component: CreateDepartmentComponent},
  {path:'**', component: CreateEmployeeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SetEmployeeSalaryComponent,
    CreateDepartmentComponent,
    ListDepartmentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    
  ],
  providers: [
    EmployeeService,
    UpdateEmployeeService,
    DepartmetService,
    GetDepartmentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
