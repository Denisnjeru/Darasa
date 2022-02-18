import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgPipesModule } from 'ngx-pipes';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrivacyModalComponent } from './modals/privacy-modal/privacy-modal.component';
import {
  User, Users, Key, Settings, Search, X, Bell, CreditCard, Activity, LogOut, ChevronUp,
  ChevronDown, ChevronLeft, ChevronRight, Home, Calendar, BookOpen, Book, Bookmark, Info,
  MessageSquare
} from 'angular-feather/icons';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { SearchComponent } from './search/search.component';
import { SchedulerWidgetComponent } from './widgets/scheduler-widget/scheduler-widget.component';
import { TodaysClassesWidgetComponent } from './widgets/todays-classes-widget/todays-classes-widget.component';
import { PaymentHistoryWidgetComponent } from './widgets/payment-history-widget/payment-history-widget.component';
import { CoursesWidgetComponent } from './widgets/courses-widget/courses-widget.component';
import { ClassroomWidgetComponent } from './timetable/classroom-widget/classroom-widget.component';
import { CourseCardComponent } from './cards/course-card/course-card.component';
import { ClassroomCardComponent } from './cards/classroom-card/classroom-card.component';
import { StudentsAvatarGroupComponent } from './avatars/students-avatar-group/students-avatar-group.component';
import { PendingRequestsWidgetComponent } from './widgets/pending-requests-widget/pending-requests-widget.component';
import { AddClassroomModalComponent } from './modals/add-classroom-modal/add-classroom-modal.component';
import { AddLessonModalComponent } from './modals/add-lesson-modal/add-lesson-modal.component';
import { AddPostModalComponent } from './modals/add-post-modal/add-post-modal.component';
import { AccountCardComponent } from './cards/account-card/account-card.component';
import { EnrolledCoursesListComponent } from './lists/enrolled-courses-list/enrolled-courses-list.component';
import { EditProfileModalComponent } from './modals/edit-profile-modal/edit-profile-modal.component';
import { SubmitFeedbackModalComponent } from './modals/submit-feedback-modal/submit-feedback-modal.component';
import { ReadMoreComponent } from './content/read-more/read-more.component';

const ICONS = {
  User,
  Users,
  Key,
  Settings,
  Search,
  X,
  Bell,
  CreditCard,
  Activity,
  LogOut,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Home,
  Calendar,
  BookOpen,
  Book,
  Bookmark,
  Info,
  MessageSquare
};

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    PrivacyModalComponent,
    SearchComponent,
    SchedulerWidgetComponent,
    TodaysClassesWidgetComponent,
    PaymentHistoryWidgetComponent,
    CoursesWidgetComponent,
    ClassroomWidgetComponent,
    CourseCardComponent,
    ClassroomCardComponent,
    StudentsAvatarGroupComponent,
    PendingRequestsWidgetComponent,
    AddClassroomModalComponent,
    AddLessonModalComponent,
    AddPostModalComponent,
    AccountCardComponent,
    EnrolledCoursesListComponent,
    EditProfileModalComponent,
    SubmitFeedbackModalComponent,
    ReadMoreComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeatherModule.pick(ICONS),
    NgbModule,
    PagesRoutingModule,
    NgSelectModule,
    FlatpickrModule.forRoot(),
    NgPipesModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    PrivacyModalComponent,
    SearchComponent,
    SchedulerWidgetComponent,
    TodaysClassesWidgetComponent,
    PaymentHistoryWidgetComponent,
    CoursesWidgetComponent,
    ClassroomWidgetComponent,
    CourseCardComponent,
    ClassroomCardComponent,
    StudentsAvatarGroupComponent,
    PendingRequestsWidgetComponent,
    AddClassroomModalComponent,
    AddLessonModalComponent,
    AddPostModalComponent,
    AccountCardComponent,
    EnrolledCoursesListComponent,
    SubmitFeedbackModalComponent,
    ReadMoreComponent,
  ]
})
export class ComponentsModule { }
