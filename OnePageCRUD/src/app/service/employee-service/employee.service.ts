import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from '../../models/employee.model';
import { Observable, Subject } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }
  
  private readonly getEmpUrl: string = "https://localhost:44321/api/Employee";
  getEmployees(): Observable<Employee[]>{
    return this._http.get<Employee[]>(this.getEmpUrl);
  }

  private readonly getSingleEmpUrl: string = "https://localhost:44321/api/Employee/";
  getEmployeebyId(empId: number){
    return this._http.get<Employee>(this.getSingleEmpUrl + empId);
  }

  //subject add for automatiic refresh list
  private _refreshList = new Subject<Employee>();
  
  get refreshList(){
    return this._refreshList;
  }

  private readonly saveEmpURL: string = "https://localhost:44321/api/Employee";
  saveEmployee(employee: Employee){
    return this._http.post<Employee>(this.saveEmpURL, employee).pipe(
      tap
        (
          () => this._refreshList.next()
        )
    )
  }

  private readonly deleteEmpUrl: string = "https://localhost:44321/api/Employee/";
  deleteEmployeeById(empId: number){
    return this._http.delete<Employee>(this.deleteEmpUrl + empId);
  }

  private readonly updateEmpUrl: string = "https://localhost:44321/api/Employee/";
  updateEmployeeByID(empId: number, employee: Employee){
    return this._http.put(this.updateEmpUrl + empId, employee)
  }
  
}
