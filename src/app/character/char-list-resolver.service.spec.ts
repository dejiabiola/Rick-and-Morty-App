import { TestBed } from '@angular/core/testing';

import { CharListResolver } from './char-list-resolver.service';

describe('CharListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharListResolver = TestBed.get(CharListResolver);
    expect(service).toBeTruthy();
  });
});
