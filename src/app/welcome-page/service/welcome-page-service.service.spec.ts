import { TestBed } from '@angular/core/testing';

import { WelcomePageServiceService } from './welcome-page-service.service';

describe('WelcomePageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelcomePageServiceService = TestBed.get(WelcomePageServiceService);
    expect(service).toBeTruthy();
  });
});
