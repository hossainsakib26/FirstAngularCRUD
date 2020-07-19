import { TestBed } from '@angular/core/testing';

import { ComboboxSharedService } from './combobox-shared.service';

describe('ComboboxSharedService', () => {
  let service: ComboboxSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComboboxSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
