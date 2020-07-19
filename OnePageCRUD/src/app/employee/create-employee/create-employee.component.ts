import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/service/employee-service/employee.service';
import { UpdateEmployeeService } from 'src/app/service/employee-service/update-employee.service';
import { GetDepartmentService } from 'src/app/service/department-service/get-department.service';
import { Department } from 'src/app/models/department/department';
import { DepartmetService } from 'src/app/service/department-service/departmet.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = {
    id: 0,
    name: null,
    email: null,
    phone: null,
    contact_prefarence: null,
    gender: null,
    address: null,
    birthdate: null,
    department_id: 0
  };

  departments: Department[];

  constructor(private _service: EmployeeService, private _updateService: UpdateEmployeeService, 
              private _getDeptSevice: GetDepartmentService, private _deptService: DepartmetService ) { }

  ngOnInit(): void {

    //combobox work
    this._deptService.refreshDepartment.subscribe(
        () => {
            this.getDepartments();    
            this.getUpdateEmpData();
        }
    );
    
    this.getDepartments();

  }


  getUpdateDept(){
    //get recent dept
    this._getDeptSevice.presentDept.subscribe(
      (dept: Department) => {
        this.employee.department_id = dept.id
      }
    )
  }

  getDepartments(){
    this._deptService.getDepartment().subscribe(
      (depts: Department[]) => {
        if(this.employee.department_id == 0){
            this.departments = depts
        }
      }
    )
  }

  ////
  getUpdateEmpData(){
    this._updateService.currentEmp.subscribe((emp: Employee) => {
      if (emp != null && emp.id > 0)
        this.employee = emp
    }
    )

  }
  /////////////////////////////////////////////////////
  saveEmp() {
    //get the new employee
    const newEmp: Employee = Object.assign({}, this.employee);
    if (newEmp.id === 0) {
      this._service.saveEmployee(newEmp).subscribe(
        (res: any) => {
          //alert("New Employee " + res.name);
        }
      )
    }
    else if(newEmp.id > 0)
    {
      this._service.updateEmployeeByID(this.employee.id, this.employee).subscribe(
        (emp : any) => {
            alert("Employee Update Successfully!");
        }
      )
    }
  }
}
