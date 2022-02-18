import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lesson } from '../data.models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getUserCourses(userId: string, page: string = '1'): Observable<any> {
    const url = `${environment.baseUrl}users/${userId}/courses/`;
    return this.http.get<any>(url, { params: { page }});
  }

  getCourses(params: any = {}): Observable<any> {
    const url = `${environment.baseUrl}courses/`;
    return this.http.get<any>(url, { params });
  }

  getCourse(courseId: string): Observable<any> {
    const url = `${environment.baseUrl}courses/${courseId}`;
    return this.http.get<any>(url);
  }

  hasRequestedCourse(courseId: string): Observable<any> {
    const url = `${environment.baseUrl}courses/${courseId}/requested/`;
    return this.http.get<any>(url);
  }

  hasJoinedCourse(courseId: string): Observable<any> {
    const url = `${environment.baseUrl}courses/${courseId}/joined/`;
    return this.http.get<any>(url);
  }

  createCourse(course): Observable<any> {
    const formData = new FormData();
    for (const key in course) {
      if (course.hasOwnProperty(key) && course[key]) {
        formData.append(key, course[key]);
      }
    }
    const url = `${environment.baseUrl}courses/add/`;
    return this.http.post<any>(url, formData);
  }

  createLesson(lesson): Observable<any> {
    const formData = new FormData();
    for (const key in lesson) {
      if (lesson.hasOwnProperty(key) && lesson[key]) {
        formData.append(key, lesson[key]);
      }
    }
    const url = `${environment.baseUrl}lessons/`;
    return this.http.post<any>(url, formData);
  }

  deleteLesson(lessonId): Observable<any> {
    const url = `${environment.baseUrl}lessons/${lessonId}`;
    return this.http.delete<any>(url);
  }

  createPost(post): Observable<any> {
    const url = `${environment.baseUrl}posts/`;
    return this.http.post<any>(url, post);
  }

  deletePost(postId): Observable<any> {
    const url = `${environment.baseUrl}posts/${postId}`;
    return this.http.delete<any>(url);
  }

  getCoursesBySearch(searchValue: string): Observable<any> {
    const url = `${environment.baseUrl}courses/?search=${searchValue}`;
    return this.http.get<any>(url).pipe(map(response => response?.results));
  }

}
