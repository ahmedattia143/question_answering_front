import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextQuestionComponent } from './context-question.component';

describe('ContextQuestionComponent', () => {
  let component: ContextQuestionComponent;
  let fixture: ComponentFixture<ContextQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
