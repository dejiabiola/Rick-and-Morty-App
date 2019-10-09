import { TestBed } from '@angular/core/testing';

import { InjectionService } from './injection.service';

describe('InjectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InjectionService = TestBed.get(InjectionService);
    expect(service).toBeTruthy();
  });
});
