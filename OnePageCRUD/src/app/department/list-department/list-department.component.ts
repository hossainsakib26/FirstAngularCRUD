import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department/department';
import { DepartmetService } from 'src/app/service/department-service/departmet.service';
import { GetDepartmentService } from "../../service/department-service/get-department.service";

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {

  lsitDepartment: Department[];

  // get listDepartment(): Department[]{
  //   return this._getDeptService.shareDepartment;
  // }
  // set listDepartment(value: Department[]){
  //   this._getDeptService.shareDepartment = value;
  // }
  
  constructor(private _service: DepartmetService, private _getDeptService: GetDepartmentService) { }

  ngOnInit(): void {
    this._service.refreshDepartment.subscribe(
      () => this.getDepartments()
    );
    this.getDepartments();
  }

  getDepartments(){
    this._service.getDepartment().subscribe(
      dept => this.lsitDepartment = dept
    )
  }

  deleteDept(dId: number){
    alert("are you sure you wanna delete this department!");
    this._service.deleteDepartment(dId).subscribe(
      (dept: any) => {
        this.lsitDepartment = this.lsitDepartment.filter(c => c.id != dId)
      }
    )
  }

}
