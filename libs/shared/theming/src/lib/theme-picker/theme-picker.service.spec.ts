import { TestBed } from '@angular/core/testing';

import { ThemePickerService } from './theme-picker.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';

describe('ThemePickerService', () => {
  let service: ThemePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule,
        RouterLink,
        RouterModule,
        RouterModule.forRoot([]),
      ],
    });
    service = TestBed.inject(ThemePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
