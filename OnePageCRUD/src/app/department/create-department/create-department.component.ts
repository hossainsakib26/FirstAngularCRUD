import { Component, OnInit, Input } from '@angular/core';
import { Department } from "../../models/department/department";
import { DepartmetService } from 'src/app/service/department-service/departmet.service';
import { GetDepartmentService } from 'src/app/service/department-service/get-department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  department: Department = {
    id: 0,
    name: null,
    code: null,
  }

  constructor(private _service: DepartmetService, private _getDeptService: GetDepartmentService) { }

  ngOnInit(): void {
    
  }


  saveDepartment(){
    //get the new unsave data
    const newDept: Department = Object.assign({},(this.department));
    if(newDept.id == 0)
    {
      this._service.saveDepartment(newDept).subscribe
      (
        (res: Department) =>
        {
          if (res.id > 0) 
          {
            alert(res.id + " is Successfully Save")
            this.department.id = res.id;
            this._getDeptService.changeDept(res);
          }
          else
          {
            alert("Sorry Try Again")
          }
        }
      );
    }
  }
}
