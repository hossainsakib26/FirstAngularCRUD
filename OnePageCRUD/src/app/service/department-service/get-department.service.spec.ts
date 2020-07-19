import { TestBed } from '@angular/core/testing';

import { GetDepartmentService } from './get-department.service';

describe('GetDepartmentService', () => {
  let service: GetDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
