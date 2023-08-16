import { TestBed } from '@angular/core/testing';

import { MagicItemService } from './magic-item.service';
import { HttpClientModule } from '@angular/common/http';

describe('MagicItemService', () => {
  let service: MagicItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MagicItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
