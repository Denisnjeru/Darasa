import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CoursesService } from 'src/app/services/courses.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user = null;
  public courses = [];
  public profileForm: FormGroup;
  public profileSubmitted = false;
  public photoTouched = false;
  public fullName = "";

  constructor(
    private authService: AuthService,
    private coursesService: CoursesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      profile_photo: ['', Validators.required]
    });
    this.getUser();
    this.getUserCourses();
  }
  get pf(): any { return this.profileForm.controls; }
  private getUser(): void {
    this.user = this.authService.getLoggedInUser();
    this.fullName = this.user.first_name + ' ' + this.user.last_name;
  }
  private getUserCourses(): void {
    if (this.user) {
      this.coursesService.getUserCourses(this.user.id)
        .subscribe(response => {
          this.courses = response.results;
        });
    }
  }
  openPopup(){
    this.profileForm.controls.first_name.setValue(this.user.first_name);
    this.profileForm.controls.last_name.setValue(this.user.last_name);
  }
  onProfileSubmit(){

  }
  public fileChosen(event): void {
    let file: any;
    if(event.target.files.length > 0){
      file = (event.target as HTMLInputElement).files[0];
      if(file != undefined)
        this.photoTouched = false;
    }
    else{
      this.photoTouched = true;
      file = '';
    }
    this.profileForm.patchValue({
      profile_photo: file
    });
    this.profileForm.get('profile_photo').updateValueAndValidity();
  }

}