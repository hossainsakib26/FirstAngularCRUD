import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Department } from 'src/app/models/department/department';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmetService {
  
  constructor(private _http: HttpClient) { }

  //get department
  private departmentsURL: string = 'https://localhost:44321/api/department';
  getDepartment(): Observable<Department[]>{
    var departments = this._http.get<Department[]>(this.departmentsURL);
    return departments;
  }

  //get single department
  private singleDepartment: string = 'https://localhost:44321/api/department/';
  getSingleDept(dId: number){
    var department = this._http.get<Department>(this.singleDepartment + dId);
    return department;
  }

  //for refresh data
  private _refreshDepartment = new Subject<Department>();
  //get method for get new save data
  get refreshDepartment(){
    return this._refreshDepartment;
  }

  //save new employee
  private saveURL: string = 'https://localhost:44321/api/department';
  saveDepartment(department: Department){
    var saveData = this._http.post<Department>(this.saveURL, department)
    .pipe(
        tap(
            () => this._refreshDepartment.next()
          )
        );
    return saveData;
  }

  //delete employee
  private dealeteURL: string = 'https://localhost:44321/api/department/';
  deleteDepartment(dId: number){
    var deleteData = this._http.delete<Department>(this.dealeteURL + dId);
    return deleteData;
  }

  //update employee
  private updateURL: string = 'https://localhost:44321/api/department/';
  updateDepartment(dId: number, departmen: Department){
    var updateData = this._http.put(this.updateURL + dId, departmen);
    return updateData;
  }

}
