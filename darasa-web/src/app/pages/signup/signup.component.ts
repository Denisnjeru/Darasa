import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alert, Level } from 'src/app/data.models';
import { UsersService } from './../../services/users.service';
import { CustomValidators, FileValidator } from '../../utils/custom-validators';
import { delay } from 'rxjs/operators';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  loading = false;
  confirmationLinkSent = false;
  alerts: Alert[] = [];

  studentForm: FormGroup;
  studentPasswordVisible = false;
  studentRepeatPasswordVisible = false;
  studentSubmitted = false;
  postingStudent = false;

  teacherForm: FormGroup;
  teacherPasswordVisible = false;
  teacherRepeatPasswordVisible = false;
  teacherSubmitted = false;
  postingTeacher = false;
  levels: Level[] = [];
  allowTeacherVerification = false;
  titles: any = [
    { id: 'mr', name: 'Mr.' },
    { Id: 'mrs', name: 'Mrs.' },
    { id: 'miss', name: 'Miss.' },
    { id: 'ms', name: 'Ms.' },
    { id: 'dr', name: 'Dr.' },
    { id: 'prof', name: 'Prof.' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private schoolService: SchoolService,
  ) { }

  ngOnInit(): void {
    this.initStudentForm();
    this.initTeacherForm();
    this.getLevels();
    this.checkTeacherVerification();
  }

  get sf(): any { return this.studentForm.controls; }

  getLevels(): void {
    this.schoolService
      .getLevels()
      .pipe(delay(500))
      .subscribe(response => {
        this.levels = response?.results;
      });
  }

  checkTeacherVerification(): void {
    this.schoolService
      .getSchools()
      .subscribe(response => {
        this.allowTeacherVerification = response?.results[0]?.allow_teacher_verification;
      });
  }

  initStudentForm(): void {
    this.studentForm = this.formBuilder.group({
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      level: [null, [Validators.required]],
      email: [null, [
        Validators.email,
        Validators.required,
      ]],
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
      accept_terms: [false]
    },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  onStudentSubmit(): void {
    this.studentSubmitted = true;
    if (this.studentForm.valid) {
      const studentFormData = this.studentForm.getRawValue();
      if (studentFormData.password !== studentFormData.repeatPassword) {
        return;
      }

      if (!studentFormData.accept_terms) {
        const alert: Alert = {
          type: 'warning',
          message: 'You have to accept our terms of use and privacy to proceed.',
          closed: false
        };
        setTimeout(() => alert.closed = true, 10000);
        this.alerts.push(alert);
        return;
      }

      // tslint:disable-next-line:no-string-literal
      studentFormData['role'] = 'student';
      this.postingStudent = true;
      this.usersService
        .createUser(studentFormData)
        .subscribe(response => {
          this.confirmationLinkSent = true;
          this.postingStudent = false;
        }, error => {
          const alert: Alert = {
            type: 'danger',
            message: error?.error?.detail || error?.error,
            closed: false
          };
          setTimeout(() => alert.closed = true, 10000);
          this.alerts.push(alert);
          this.postingStudent = false;
        });
    }
  }

  toggleStudentsPassword(): void {
    this.studentPasswordVisible = !this.studentPasswordVisible;
  }

  toggleStudentRepeatPassword(): void {
    this.studentRepeatPasswordVisible = !this.studentRepeatPasswordVisible;
  }

  get tf(): any { return this.teacherForm.controls; }

  initTeacherForm(): void {
    this.teacherForm = this.formBuilder.group({
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      title: [null, Validators.required],
      email: [null, [
        Validators.email,
        Validators.required,
      ]],
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
      certificate: this.allowTeacherVerification ? [null, [FileValidator.validate]] : [null],
      accept_terms: [false]
    },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  onTeacherSubmit(): void {
    this.teacherSubmitted = true;
    console.log(this.teacherForm.valid)
    if (this.teacherForm.valid) {
      const teacherFormData = this.teacherForm.getRawValue();
      if (teacherFormData.password !== teacherFormData.repeatPassword) {
        return;
      }

      if (!teacherFormData.accept_terms) {
        const alert: Alert = {
          type: 'warning',
          message: 'You have to accept our Terms of use and Privacy to proceed.',
          closed: false
        };
        setTimeout(() => alert.closed = true, 10000);
        this.alerts.push(alert);
        return;
      }

      // tslint:disable-next-line:no-string-literal
      teacherFormData['role'] = 'teacher';
      this.postingTeacher = true;
      this.usersService
        .createUser(teacherFormData)
        .subscribe(response => {
          this.confirmationLinkSent = true;
          this.postingTeacher = false;
        }, error => {
          const alert: Alert = {
            type: 'danger',
            message: error?.error?.detail || error?.error,
            closed: false
          };
          setTimeout(() => alert.closed = true, 10000);
          this.alerts.push(alert);
          this.postingTeacher = false;
        });
    }
  }

  toggleTeacherPassword(): void {
    this.teacherPasswordVisible = !this.teacherPasswordVisible;
  }

  toggleTeacherRepeatPassword(): void {
    this.teacherRepeatPasswordVisible = !this.teacherRepeatPasswordVisible;
  }

  fileChosen(event): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.teacherForm.patchValue({
      certificate: file
    });
    this.teacherForm.get('certificate').updateValueAndValidity();
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
