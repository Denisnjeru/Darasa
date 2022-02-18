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
  profile: User;
  recommendedCourses: Course[] = [];
  loadingCourses = false;
  levels: Level[] = [];
  selectedLevel = 0;

  constructor(
    private cookieService: CookieService,
    private coursesService: CoursesService,
    private schoolService: SchoolService,
  ) { }

  ngOnInit(): void {
    this.profile = JSON.parse(this.cookieService.get('profile') || null);
    this.selectedLevel = this.profile?.student?.level?.id || 0;
    this.getUserRecommendedCourses(this.selectedLevel);
    this.getLevels();
  }

  getUserRecommendedCourses(level: number): void {
    if (this.profile?.role !== 'student') { return; }
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
