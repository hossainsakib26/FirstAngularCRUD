import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from "src/app/service/employee-service/employee.service";
import { Employee } from 'src/app/models/employee.model';
import { UpdateEmployeeService } from "../../service/employee-service/update-employee.service";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  
  constructor(private _service: EmployeeService, private _updateService: UpdateEmployeeService) { }

  ngOnInit(): void {

    this._service.refreshList.subscribe(
      () => {
        this.refreshList();
      }
    )
    this.refreshList();
  }
  
  ////////////////////////////////////////////////////////////
  refreshList(){
    this._service.getEmployees().subscribe(
      (emp) => this.employees = emp
    );
  }

  emoloyeeUpdate(emp: Employee){
    this._updateService.changeEmployee(emp);
    alert("Wanna edit this employee: " + emp.name +"?");
  }

  deleteEmployee(id: number){
    alert("Are you sure! You want to delete this Employee! "+id);
    this._service.deleteEmployeeById(id).subscribe(
      (res: any) => {
        this.employees = this.employees.filter(c=> c.id != id)
      }
    );
  }

}
