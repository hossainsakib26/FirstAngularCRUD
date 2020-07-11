import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {

  employee: Employee;
  //@Output() employeeSend: any = new EventEmitter<Employee>();

  //employee: any;
  empId: number;
  employeeList: Employee[];

  constructor(private _service: EmployeeService, 
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe( params =>{
      this.empId = +params.get('id');
    });
    
    this._service.getEmployees().subscribe(
      empData => {
        if(empData != undefined || empData.length >0){
          this.employeeList = empData
        }
      }
    );

    this._service.getEmployeebyId(this.empId).subscribe(
      (emp: Employee) => {
        if(emp.id > 0)
        {
          this.employee = emp;
        }
      }
    )

  }

  goBacktoList(){
    this._router.navigate(['employees']);
  }

  viewNextEmployee(){
    if(this.empId < this.employeeList.length){
      this.empId = this.empId + 1;
    }
    else{
      this.empId = 1;
    }
    
    this._service.getEmployeebyId(this.empId).subscribe(
        (emp) => this.employee = emp 
      );
    
    this._router.navigate(['/employees', this.empId]);
  }

  deleteEmployee(empId: number){
    this._service.deleteEmployeeById(empId).subscribe();
    this._router.navigate(['/employees']);
  }

  updateEmployee(empId){
    //this.employeeSend.emit(this.employee);
    this._router.navigate(['employees/update/', empId]);
  }
  
}
