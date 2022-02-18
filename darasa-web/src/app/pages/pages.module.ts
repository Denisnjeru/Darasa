import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { NgPipesModule } from 'ngx-pipes';
import { NgSelectModule } from '@ng-select/ng-select';
import { SafePipeModule } from 'safe-pipe';
import {
  User, Key, Clock, Home, Book, Upload, Check, Repeat, ArrowLeft, ArrowRight, Mail, Eye, EyeOff, Lock,
  Filter, DownloadCloud, Info, Volume2, Heart, FolderPlus, FilePlus, UserPlus
} from 'angular-feather/icons';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimetableComponent } from './timetable/timetable.component';
import { PaymentsComponent } from './payments/payments.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { StudentRequestsComponent } from './student-requests/student-requests.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { TermsAndPrivacyComponent } from './terms-and-privacy/terms-and-privacy.component';
import { AccountVerifiedComponent } from './account-verified/account-verified.component';
import { RecommendedCoursesListComponent } from './courses/recommended-courses-list/recommended-courses-list.component';
import { PipesModule } from '../pipes/pipes.module';

const ICONS = {
  User,
  Key,
  Clock,
  Home,
  Book,
  Upload,
  Check,
  Repeat,
  ArrowLeft,
  ArrowRight,
  Mail,
  Eye,
  EyeOff,
  Lock,
  Filter,
  DownloadCloud,
  Info,
  Volume2,
  Heart,
  FolderPlus,
  FilePlus,
  UserPlus
};

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
  bootstrapPlugin
]);

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    LayoutComponent,
    DashboardComponent,
    TimetableComponent,
    PaymentsComponent,
    NotFoundComponent,
    ProfileComponent,
    CoursesListComponent,
    AddCourseComponent,
    CourseDetailComponent,
    StudentRequestsComponent,
    NewPasswordComponent,
    TermsAndPrivacyComponent,
    AccountVerifiedComponent,
    RecommendedCoursesListComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    FeatherModule.pick(ICONS),
    NgbModule,
    FullCalendarModule,
    NgPipesModule,
    NgSelectModule,
    SafePipeModule,
    PipesModule,
  ],
})
export class PagesModule { }
