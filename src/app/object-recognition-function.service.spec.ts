import { TestBed } from '@angular/core/testing';

import { ObjectRecognitionFunctionService } from './object-recognition-function.service';

describe('ObjectRecognitionFunctionService', () => {
  let service: ObjectRecognitionFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectRecognitionFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
