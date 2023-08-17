import { TestBed } from '@angular/core/testing';

import { FastDoublingService } from './fast-doubling.service';

describe('FastDoublingService', () => {
  let service: FastDoublingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FastDoublingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
