import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { delay } from 'rxjs/operators';
import { User, Course, Level } from 'src/app/data.models';
import { CoursesService } from 'src/app/services/courses.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-recommended-courses-list',
  templateUrl: './recommended-courses-list.component.html',
  styleUrls: ['./recommended-courses-list.component.scss']
})
export class RecommendedCoursesListComponent implements OnInit {

  user: User;
  recommendedCourses: Course[] = [];
  loadingCourses = true;
  levels: Level[] = [];
  selectedLevel = 0;

  constructor(
    private cookieService: CookieService,
    private coursesService: CoursesService,
    private schoolService: SchoolService,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user') || null);
    this.selectedLevel = this.user?.student?.level?.id || 0;
    this.getUserRecommendedCourses(this.selectedLevel);
    this.getLevels();
  }

  getUserRecommendedCourses(level: number): void {
    if (this.user?.role !== 'student') { return; }
    this.loadingCourses = true;
    const params = {
      recommended: true
    };

    if (Number(level)) {
      // tslint:disable-next-line:no-string-literal
      params['levels'] = level;
    }

    this.coursesService
      .getCourses(params)
      .subscribe(response => {
        this.recommendedCourses = response.results;
        this.loadingCourses = false;
      });
  }

  getLevels(): void {
    this.schoolService
      .getLevels()
      .pipe(delay(500))
      .subscribe(response => {
        this.levels = response?.results;
      });
  }

}
