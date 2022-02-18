import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/data.models';

@Component({
  selector: 'app-enrolled-courses-list',
  templateUrl: './enrolled-courses-list.component.html',
  styleUrls: ['./enrolled-courses-list.component.scss']
})
export class EnrolledCoursesListComponent implements OnInit {

  @Input() enrolledCourses: Course[] = [];
  @Input() loadingUserCourses = false;

  constructor() { }

  ngOnInit(): void {
  }

}
