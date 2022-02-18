import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { Course, User } from 'src/app/data.models';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { CoursesService } from 'src/app/services/courses.service';
import { EditProfileModalComponent } from 'src/app/components/modals/edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User = null;
  courses: Course[] = [];
  submitted = false;
  pictureURL: any;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private coursesService: CoursesService,
    private modalService: NgbModal,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getUserCourses();
    this.pictureURL = this.user?.picture;
  }

  getUser(): void {
    this.user = this.authService.getLoggedInUser();
  }

  getUserCourses(): void {
    if (this.user) {
      this.coursesService.getUserCourses(this.user.id)
        .subscribe(response => {
          this.courses = response.results;
        });
    }
  }

  editProfile(): void {
    const modalRef = this.modalService.open(EditProfileModalComponent, { size: 'lg' });
    modalRef.componentInstance.user = this.user;
  }

  updateProfilePicture(picture): void {
    this.submitted = true;
    this.usersService
      .updateUser(this.user?.id, { picture })
      .subscribe(response => {
        if (response) {
          this.cookieService.set('user', JSON.stringify(response), null, '/');
        }
        this.submitted = false;
      }, error => this.submitted = false);
  }

  fileChosen(event): void {
    const file = (event.target as HTMLInputElement).files[0];

    // Validate mime type
    const mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      alert('Only images are supported.');
      return;
    }

    // Preview image
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.pictureURL = reader.result;
    };

    this.updateProfilePicture(file);
  }

}
