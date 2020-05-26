import { TestBed } from '@angular/core/testing';

import { NgDevInfoServiceService } from './ng-dev-info-service.service';

describe('NgDevInfoServiceService', () => {
  let service: NgDevInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDevInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
