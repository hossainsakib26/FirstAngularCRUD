import { Injectable } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { BehaviorSubject, Observable } from "rxjs";
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
  
}
