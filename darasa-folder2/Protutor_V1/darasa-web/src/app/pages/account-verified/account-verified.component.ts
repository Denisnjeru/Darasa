import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/data.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-verified',
  templateUrl: './account-verified.component.html',
  styleUrls: ['./account-verified.component.scss']
})
export class AccountVerifiedComponent implements OnInit {

  accountVerified = false;
  hasError = false;
  loading = false;
  user: User = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        this.loading = true;
        this.authService
          .verifyAccount(params)
          .subscribe(response => {
            this.accountVerified = true;
            this.loading = false;
            this.user = response;
          }, error => {
            this.accountVerified = false;
            this.hasError = true;
            this.loading = false;
          });
      });
  }

}
