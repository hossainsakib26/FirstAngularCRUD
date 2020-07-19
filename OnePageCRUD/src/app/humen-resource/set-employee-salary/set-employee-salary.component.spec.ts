import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEmployeeSalaryComponent } from './set-employee-salary.component';

describe('SetEmployeeSalaryComponent', () => {
  let component: SetEmployeeSalaryComponent;
  let fixture: ComponentFixture<SetEmployeeSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetEmployeeSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEmployeeSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
