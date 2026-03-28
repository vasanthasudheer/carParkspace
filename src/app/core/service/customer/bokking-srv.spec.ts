import { TestBed } from '@angular/core/testing';

import { BokkingSrv } from './bokking-srv';

describe('BokkingSrv', () => {
  let service: BokkingSrv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BokkingSrv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
