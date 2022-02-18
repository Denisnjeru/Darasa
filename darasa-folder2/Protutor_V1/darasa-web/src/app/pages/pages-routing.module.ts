import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TimetableComponent } from './timetable/timetable.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { StudentRequestsComponent } from './student-requests/student-requests.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { AccountVerifiedComponent } from './account-verified/account-verified.component';
import { TermsAndPrivacyComponent } from './terms-and-privacy/terms-and-privacy.component';
import { RecommendedCoursesListComponent } from './courses/recommended-courses-list/recommended-courses-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'new-password', component: NewPasswordComponent },
  { path: 'account-verified', component: AccountVerifiedComponent },
  { path: 'terms-and-privacy', component: TermsAndPrivacyComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'timetable', component: TimetableComponent },
      { path: 'students', component: StudentRequestsComponent },
      {
        path: 'courses',
        children: [
          {
            path: '',
            component: CoursesListComponent,
          },
          {
            path: 'add',
            component: AddCourseComponent,
          },
          {
            path: 'recommended',
            component: RecommendedCoursesListComponent,
          },
          {
            path: ':id',
            children: [
              {
                path: '',
                component: CourseDetailComponent,
              },
            ]
          },
        ]
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
