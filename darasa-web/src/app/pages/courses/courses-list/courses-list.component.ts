import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User, Course, Level } from 'src/app/data.models';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  profile: User;
  enrolledCourses: Course[] = [];
  recommendedCourses: Course[] = [];
  loadingUserCourses = false;
  levels: Level[] = [];
  selectedLevel = 0;
  page = 1;
  pageSize = 10;
  collectionSize = 0;

  constructor(
    private cookieService: CookieService,
    private coursesService: CoursesService,
  ) { }

  ngOnInit(): void {
    this.profile = JSON.parse(this.cookieService.get('profile') || null);
    this.getUserEnrolledCourses();
  }

  getUserEnrolledCourses(): void {
    if (!this.profile?.id) { return; }
    this.loadingUserCourses = true;
    this.coursesService
      .getUserCourses(this.profile?.id, String(this.page))
      .subscribe(resp => {
        this.collectionSize = resp.count;
        this.enrolledCourses = resp.results;
        this.loadingUserCourses = false;
      });
  }

}
