import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { delay } from 'rxjs/operators';
import { Level, Teacher, Student, User } from 'src/app/data.models';
import { UsersService } from 'src/app/services/users.service';
import { SchoolService } from 'src/app/services/school.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  user: User;
  courseForm: FormGroup;
  submitted = false;
  students: Student[] = [];
  teachers: Teacher[] = [];
  levels: Level[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private cookieService: CookieService,
    private schoolService: SchoolService,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user') || null);
    this.getLevels();
    this.getTeachers();
    this.courseForm = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      levels: [null, Validators.required],
      classroom_join_mode: ['join_all'],
      teacher: [null, Validators.required],
      assistant_teachers: [null],
      cover: [null, Validators.required],
    });
  }

  get f(): any { return this.courseForm.controls; }

  getLevels(): void {
    this.schoolService
      .getLevels()
      .pipe(delay(500))
      .subscribe(response => {
        this.levels = response?.results;
      });
  }

  getTeachers(): void {
    this.usersService
      .getTeachers()
      .pipe(delay(500))
      .subscribe(response => {
        this.teachers = response?.results.map(user => {
          user.full_name = `${user.first_name} ${user.last_name}`;
          return user;
        });
      });
  }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.courseForm.invalid) {
      return;
    }
    const course = this.courseForm.getRawValue();
    this.coursesService
      .createCourse(course)
      .subscribe(response => {
        this.router.navigate([`/courses/${response?.id}`]);
      });
  }

  public fileChosen(event): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.courseForm.patchValue({
      cover: file
    });
    this.courseForm.get('cover').updateValueAndValidity();
  }

}
