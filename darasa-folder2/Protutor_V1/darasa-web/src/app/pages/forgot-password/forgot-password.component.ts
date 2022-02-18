import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/data.models';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  alerts: Alert[] = [];
  submitted = false;
  emailSuccessfullySent = false;
  posting = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForgotPasswordForm();
  }

  initForgotPasswordForm(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: [null, [
        Validators.email,
        Validators.required,
      ]],
    });
  }

  get f(): any { return this.forgotPasswordForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.forgotPasswordForm.valid) {
      this.posting = true;
      const data = this.forgotPasswordForm.getRawValue();
      this.authService
        .requestPasswordReset(data)
        .subscribe(response => {
          if (response?.success) {
            this.emailSuccessfullySent = true;
            this.posting = false;
            const alert: Alert = {
              type: 'success',
              message: `A reset password link has been sent to your email, ${data?.email}, please open it to enter your new password.`,
              closed: false
            };
            setTimeout(() => alert.closed = true, 30000);
            this.alerts.push(alert);
          }
        }, error => {
          const alert: Alert = {
            type: 'danger',
            message: error?.error?.detail || error?.error,
            closed: false
          };
          setTimeout(() => alert.closed = true, 10000);
          this.alerts.push(alert);
        });
    }
  }

  closeAlert(alert): void {
    alert.closed = true;
  }

}
