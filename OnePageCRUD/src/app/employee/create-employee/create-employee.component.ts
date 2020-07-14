import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { UpdateEmployeeService } from 'src/app/service/update-employee.service';

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
    birthdate:null
  };
  
  listEmployee: Employee[];
  dataFromListEmp: any;

  constructor(private _service: EmployeeService, 
              private _updateService: UpdateEmployeeService
              ) { }

  ngOnInit(): void { 
    // this._updateService.currentEmp.subscribe(
    //   emp => this.dataFromListEmp = emp
    // )
   }

  updateEmployee(){
    
  }

  /////////////////////////////////////////////////////
  refreshEmployee(){
    this._service.getEmployees().subscribe(
        (emps) => this.listEmployee = emps
      );
  }

  saveEmp(){
    //get the new employee
    const newEmp: Employee = Object.assign({}, this.employee);
    this._service.saveEmployee(newEmp).subscribe(
      (res: any) => {
        alert("New Employee " + res.name);
      }
    )
    this.employee;
  }

}
