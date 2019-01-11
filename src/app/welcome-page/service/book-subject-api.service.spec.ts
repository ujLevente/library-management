import { TestBed } from '@angular/core/testing';

import { BookSubjectApiService } from './book-subject-api.service';

describe('BookSubjectApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookSubjectApiService = TestBed.get(BookSubjectApiService);
    expect(service).toBeTruthy();
  });
});
