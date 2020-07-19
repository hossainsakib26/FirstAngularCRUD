import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Department } from 'src/app/models/department/department';

@Injectable({
  providedIn: 'root'
})
export class GetDepartmentService {

  private getDepts = new BehaviorSubject<Department>(null);
  presentDept: Observable<Department> = this.getDepts.asObservable();

  //shareDepartment: Department[];

  constructor() { }

  changeDept(dept: Department){
    this.getDepts.next(dept);
  }
}
