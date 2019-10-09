import { TestBed, async, inject } from '@angular/core/testing';

import { GuardDetailGuard } from './guard-detail.guard';

describe('GuardDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardDetailGuard]
    });
  });

  it('should ...', inject([GuardDetailGuard], (guard: GuardDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
