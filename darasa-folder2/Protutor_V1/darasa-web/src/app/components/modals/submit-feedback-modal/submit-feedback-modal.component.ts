import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { Alert, User, Message } from 'src/app/data.models';
import { CommsService } from 'src/app/services/comms.service';

@Component({
  selector: 'app-submit-feedback-modal',
  templateUrl: './submit-feedback-modal.component.html',
  styleUrls: ['./submit-feedback-modal.component.scss']
})
export class SubmitFeedbackModalComponent implements OnInit {

  @Input() user: User;
  form: FormGroup;
  alerts: Alert[] = [];
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private commsService: CommsService,
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user') || null);
    this.form = this.formBuilder.group({
      from_user: [this.user?.id, []],
      title: ['', [Validators.required]],
      description: ['', []],
      category: ['feedback', []],
    });
  }

  get f(): any { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const message: Message = this.form.getRawValue();

    this.commsService
      .createMessage(message)
      .subscribe(response => {
        if (response) {
          const alert: Alert = {
            type: 'success',
            message: 'Feedback submitted successfully',
            closed: false
          };
          setTimeout(() => alert.closed = true, 10000);
          this.alerts.push(alert);
        }
        this.submitted = false;
        this.form.reset();
      }, error => {
        const alert: Alert = {
          type: 'danger',
          message: 'Failed to submit your feedback',
          closed: false
        };
        setTimeout(() => alert.closed = true, 10000);
        this.alerts.push(alert);
        this.submitted = false;
      });
  }

  closeAlert(alert): void {
    alert.closed = true;
  }

}
