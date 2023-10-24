import { TestBed } from '@angular/core/testing';

import { CollapseServiceService } from './collapse-service.service';

describe('CollapseServiceService', () => {
  let service: CollapseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollapseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
