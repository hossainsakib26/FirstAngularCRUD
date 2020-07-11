import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //@ViewChild('createEmpForm') public createEmployeeForm: NgForm;
  
  imageUrl: string = "";
  fileupload: File = null;
  employee: Employee= {
  
    id: 0,
    name: null,
    email: null,
    phone: null,
    contact_prefarence: 'Phone',
    gender: 'Male',
    birthdate: null,
    address: null,
  
  };
  emplist: Employee[];
  constructor(private _service: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    
  }
  
  //save employe
  saveEmployee(): void{
    const newEmp: Employee = Object.assign({},this.employee);
    //save in array
    this._service.saveEmployee(newEmp).subscribe();
    //reset form with reference variable
    //this.createEmployeeForm.reset();
    //redirect to list
    this._router.navigate(['employees']);
  }

  handleFileInput(file: FileList){
      this.fileupload = file.item(0);
      //image preview
      var viewImageReader =  new FileReader();
      viewImageReader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      };
      viewImageReader.readAsDataURL(this.fileupload);
  }

}
