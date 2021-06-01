import { TestBed } from '@angular/core/testing';

import { SimpleQuestionService } from './simple-question.service';

describe('SimpleQuestionService', () => {
  let service: SimpleQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
