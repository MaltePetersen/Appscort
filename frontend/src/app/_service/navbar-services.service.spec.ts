import { TestBed } from '@angular/core/testing';

import { NavbarServicesService } from './navbar-services.service';

describe('NavbarServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarServicesService = TestBed.get(NavbarServicesService);
    expect(service).toBeTruthy();
  });
});
