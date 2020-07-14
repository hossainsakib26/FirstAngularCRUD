import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdateEmployeeService {

  private employeeSource = new BehaviorSubject<Employee>(null);
  currentEmp = this.employeeSource.asObservable()

  constructor() { }

  changeEmployee(emp: Employee){
    this.employeeSource.next(emp);
  }

}
