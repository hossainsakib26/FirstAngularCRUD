import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  getEmployee: Employee;
  updateId: number;

  constructor(public _service: EmployeeService, 
              public _activatedRoute: ActivatedRoute, 
              public _router: Router) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(
      (getid) => this.updateId = +getid.get('id')
    );

    this._service.getEmployeebyId(this.updateId).subscribe(
      (emp) => this.getEmployee = emp
    );

  }

  updateEmployee(){

    this._service.updateEmployeeByID(this.updateId, this.getEmployee).subscribe(
      (res: Response) =>  {
      if(res === null)
      {
        alert(res);
        this._router.navigate(['employees']);
      }
    }
    );
  }

}
