import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { isEmpty } from '../../utils';
import { Alert } from 'src/app/data.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  alerts: Alert[] = [];
  showPassword = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    const isAuthenticated: boolean = this.authService.isAuthenticated();
    if (isAuthenticated) {
      this.router.navigate(['/']);
    }

    // Subscribe to account alerts
    this.authService.alert.subscribe(alert => {
      if (!isEmpty(alert)) {
        this.alerts.push(alert);
      }
    });

    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [
        Validators.email,
        Validators.required,
      ]],
      password: [null, [Validators.required]],
    });
  }

  get f(): any { return this.loginForm.controls; }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      const loginFormData = this.loginForm.getRawValue();
      this.loading = true;
      this.authService
        .login(loginFormData.email, loginFormData.password)
        .subscribe(authResult => {
          if (authResult.hasOwnProperty('access')) {
            this.loading = false;
            this.authService.setSession(authResult);
          }
        }, (errors) => {
          if (errors.hasOwnProperty('error')) {
            this.loading = false;
            const alert: Alert = {
              type: 'danger',
              message: errors.error.detail,
              closed: false
            };
            setTimeout(() => alert.closed = true, 10000);
            this.alerts.push(alert);
          }
        });
    }
  }

  closeAlert(alert): void {
    alert.closed = true;
  }

}
