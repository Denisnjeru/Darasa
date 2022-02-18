import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Course, User } from 'src/app/data.models';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-widget',
  templateUrl: './courses-widget.component.html',
  styleUrls: ['./courses-widget.component.scss']
})
export class CoursesWidgetComponent implements OnInit {

  user: User;
  courses: Course[] = [];
  filter = 'enrolled';

  constructor(
    private cookieService: CookieService,
    private coursesService: CoursesService,
  ) { }

  ngOnInit(): void {
    this.filterCourses('enrolled');
  }

  filterCourses(status): void {
    this.user = JSON.parse(this.cookieService.get('user') || null);
    if (status === 'enrolled') {
      if (this.user?.id) {
        this.coursesService
          .getUserCourses(this.user.id)
          .subscribe(resp => {
            this.courses = resp.results;
            this.filter = 'enrolled';
          });
      }
    } else if (status === 'recommended') {
      const params = {
        recommended: true
      };
      if (this.user.role === 'student') {
        // tslint:disable-next-line: no-string-literal
        params['levels'] = this.user?.student?.level?.id;
      }
      this.coursesService
        .getCourses(params)
        .subscribe(response => {
          this.courses = response.results;
          this.filter = 'recommended';
        });
    }
  }

}
