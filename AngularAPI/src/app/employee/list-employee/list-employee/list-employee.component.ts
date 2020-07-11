import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  public employeeList: Employee[];

  constructor(private _service: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    //get all employee.
    this._service.getEmployees().subscribe(
                  empData => this.employeeList = empData
                  );
  }

  onClick(id: number){
    this._router.navigate(['/employees', id]);
  }

}
