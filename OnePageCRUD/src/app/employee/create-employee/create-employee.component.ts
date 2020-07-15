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
    birthdate: null
  };

  listEmployee: Employee[];

  constructor(private _service: EmployeeService,
    private _updateService: UpdateEmployeeService
  ) { }

  ngOnInit(): void {

    this._updateService.currentEmp.subscribe((emp: Employee) => {
      if (emp != null && emp.id > 0)
        this.employee = emp
    })
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
