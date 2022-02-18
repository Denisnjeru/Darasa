import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-terms-and-privacy',
  templateUrl: './terms-and-privacy.component.html',
  styleUrls: ['./terms-and-privacy.component.scss']
})
export class TermsAndPrivacyComponent implements OnInit {

  termsAndPrivacy = '';

  constructor(
    private schoolService: SchoolService,
  ) { }

  ngOnInit(): void {
    this.schoolService
      .getSchools()
      .subscribe(response => {
        const school = response.results[0];
        this.termsAndPrivacy = school.terms_and_privacy;
      });
  }

}
