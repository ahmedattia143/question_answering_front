import { TestBed } from '@angular/core/testing';

import { ContextQuestionService } from './context-question.service';

describe('ContextQuestionService', () => {
  let service: ContextQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContextQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
