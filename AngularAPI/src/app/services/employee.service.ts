import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  employeeList: Employee[];
  
  private readonly getEmpUrl: string = "https://localhost:44321/api/Employee";
  getEmployees(): Observable<Employee[]>{
    return this._http.get<Employee[]>(this.getEmpUrl);
  }

  private readonly getSingleEmpUrl: string = "https://localhost:44321/api/Employee/";
  getEmployeebyId(empId: number){
    return this._http.get<Employee>(this.getSingleEmpUrl + empId);
  }

  private readonly saveEmpURL: string = "https://localhost:44321/api/Employee";
  saveEmployee(employee: Employee){
    return this._http.post<Employee>(this.saveEmpURL, employee);
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
