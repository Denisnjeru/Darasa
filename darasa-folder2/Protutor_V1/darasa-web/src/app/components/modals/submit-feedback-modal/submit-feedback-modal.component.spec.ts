import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFeedbackModalComponent } from './submit-feedback-modal.component';

describe('SubmitFeedbackModalComponent', () => {
  let component: SubmitFeedbackModalComponent;
  let fixture: ComponentFixture<SubmitFeedbackModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitFeedbackModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFeedbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
