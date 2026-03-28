import { TestBed } from '@angular/core/testing';

import { SpacingList } from './spacing-list';

describe('SpacingList', () => {
  let service: SpacingList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacingList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
