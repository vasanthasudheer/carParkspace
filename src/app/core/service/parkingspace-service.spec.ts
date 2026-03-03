import { TestBed } from '@angular/core/testing';

import { ParkingspaceService } from './parkingspace-service';

describe('ParkingspaceService', () => {
  let service: ParkingspaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingspaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
