import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { BehaviorSubject, Observable, Subject } from "rxjs";
// import { HttpClient } from '@angular/common/http';
// import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UpdateEmployeeService {

  private employeeSource = new BehaviorSubject<Employee>(null);
  currentEmp: Observable<any> = this.employeeSource.asObservable()

  constructor() { }

  changeEmployee(emp: Employee){
    this.employeeSource.next(emp);
  }

  // private refreshList = new Subject<Employee>()
  // private readonly saveEmpURL: string = "https://localhost:44321/api/Employee";
  // saveEmployee(employee: Employee){
  //   return this._http.post<Employee>(this.saveEmpURL, employee).pipe(
  //     tap( 
  //       ()=> this.refreshList.next()
  //     )
  //   );
  // }

}
