import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Alert } from 'src/app/data.models';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidators } from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  newPasswordForm: FormGroup;
  passwordVisible = false;
  repeatPasswordVisible = false;
  submitted = false;
  posting = false;
  token = '';
  alerts: Alert[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initNewPasswordForm();
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        this.token = params.token;
      });
  }

  private initNewPasswordForm(): void {
    this.newPasswordForm = this.formBuilder.group({
      password: [
        null,
        Validators.compose([
          Validators.required,
          // check whether the entered password has a number
          CustomValidators.patternValidator(/\d/, {
            hasNumber: true
          }),
          // check whether the entered password has upper case letter
          CustomValidators.patternValidator(/[A-Z]/, {
            hasCapitalCase: true
          }),
          // check whether the entered password has a lower case letter
          CustomValidators.patternValidator(/[a-z]/, {
            hasSmallCase: true
          }),
          // check whether the entered password has a special character
          CustomValidators.patternValidator(
            /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
            {
              hasSpecialCharacters: true
            }
          ),
          Validators.minLength(8)
        ])
      ],
      repeatPassword: [null, [Validators.required]],
    },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  get f(): any { return this.newPasswordForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.newPasswordForm.valid) {
      this.posting = true;
      const data = this.newPasswordForm.getRawValue();
      const payload = {
        password: data.password,
        token: this.token
      };
      this.authService
        .resetPassword(payload)
        .subscribe(response => {
          if (response.success) {
            const alert: Alert = {
              type: 'success',
              message: 'Your password has been updated successfully! You can now login.',
              closed: false
            };
            setTimeout(() => alert.closed = true, 30000);
            this.alerts.push(alert);
            this.posting = false;
          }
        }, error => {
          const alert: Alert = {
            type: 'danger',
            message: error?.error?.detail || error?.error,
            closed: false
          };
          setTimeout(() => alert.closed = true, 10000);
          this.alerts.push(alert);
          this.posting = false;
        });
    }
  }

  togglePassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleRepeatPassword(): void {
    this.repeatPasswordVisible = !this.repeatPasswordVisible;
  }

  checkPasswords(group: FormGroup): any {
    const password = group.get('password').value;
    const repeatPasword = group.get('repeatPasword').value;
    return password === repeatPasword ? null : { notSame: true };
  }

  closeAlert(alert): void {
    alert.closed = true;
  }

}
