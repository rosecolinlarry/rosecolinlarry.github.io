import { TestBed } from '@angular/core/testing';

import { ReverseIntService } from './reverse-int.service';

describe('ReverseIntService', () => {
  let service: ReverseIntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReverseIntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
