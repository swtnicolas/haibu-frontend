import { TestBed } from '@angular/core/testing';

import { HaibuService } from './haibu.service';

describe('HaibuService', () => {
  let service: HaibuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaibuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
