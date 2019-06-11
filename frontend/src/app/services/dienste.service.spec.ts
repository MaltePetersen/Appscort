import { TestBed } from '@angular/core/testing';

import { DiensteService } from './dienste.service';

describe('DiensteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiensteService = TestBed.get(DiensteService);
    expect(service).toBeTruthy();
  });
});
