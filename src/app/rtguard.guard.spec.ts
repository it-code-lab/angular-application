import { TestBed } from '@angular/core/testing';

import { RtguardGuard } from './rtguard.guard';

describe('RtguardGuard', () => {
  let guard: RtguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RtguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
