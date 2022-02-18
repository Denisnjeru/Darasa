import { Component, OnInit } from '@angular/core';
import { SidebarMenu, User } from '../../data.models';
import { CookieService } from 'ngx-cookie-service';

export const STUDENT_ROUTES: SidebarMenu[] = [
  { id: 1, path: '/dashboard', title: 'Dashboard', icon: 'home' },
  { id: 2, path: '/timetable', title: 'Timetable', icon: 'calendar' },
  { id: 3, path: '/courses', title: 'Courses', icon: 'book-open' },
];

export const TEACHER_ROUTES: SidebarMenu[] = [
  { id: 1, path: '/dashboard', title: 'Dashboard', icon: 'home' },
  { id: 2, path: '/students', title: 'Students', icon: 'users' },
  { id: 2, path: '/timetable', title: 'Timetable', icon: 'calendar' },
  { id: 3, path: '/courses', title: 'Courses', icon: 'book-open' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: User;
  menuItems: SidebarMenu[];
  showMenu = false;
  showSubmenu = {};

  constructor(
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user') || null);
    if (this.user?.role === 'student') {
      this.menuItems = STUDENT_ROUTES;
    } else if (this.user?.role === 'teacher') {
      this.menuItems = TEACHER_ROUTES;
    }
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  toggleSubMenu(id: number): void {
    this.showSubmenu[id] = !this.showSubmenu[id];
  }

}
