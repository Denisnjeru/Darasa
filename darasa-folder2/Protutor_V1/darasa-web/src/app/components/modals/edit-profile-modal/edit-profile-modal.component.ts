import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { Alert, User } from 'src/app/data.models';
import { TITLES, TIMEZONES, GENDERS } from 'src/app/constants';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss']
})
export class EditProfileModalComponent implements OnInit {

  @Input() user: User;
  form: FormGroup;
  alerts: Alert[] = [];
  submitted = false;
  titles = TITLES;
  timezones = TIMEZONES;
  genders = GENDERS;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [this.user.title.toLowerCase(), []],
      first_name: [this.user.first_name, [Validators.required]],
      last_name: [this.user.last_name, []],
      nickname: [this.user.nickname, []],
      gender: [this.user.gender.toLowerCase(), []],
      phone: [this.user.phone, []],
      timezone: [this.user.timezone, []],
    });
  }

  get f(): any { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const updatedUser = this.form.getRawValue();
    this.usersService
      .updateUser(this.user?.id, updatedUser)
      .subscribe(response => {
        const alert: Alert = {
          type: 'success',
          message: 'Profile updated successfully!',
          closed: false
        };
        setTimeout(() => alert.closed = true, 10000);
        this.alerts.push(alert);
        if (response) {
          this.cookieService.set('user', JSON.stringify(response), null, '/');
        }
        this.submitted = false;
      }, error => {
        const alert: Alert = {
          type: 'danger',
          message: 'Failed to update your profile!',
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
