import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User, Request } from 'src/app/data.models';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-pending-requests-widget',
  templateUrl: './pending-requests-widget.component.html',
  styleUrls: ['./pending-requests-widget.component.scss']
})
export class PendingRequestsWidgetComponent implements OnInit {

  user: User;
  requests: Request[] = [];

  constructor(
    private cookieService: CookieService,
    private requestsService: RequestsService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user') || null);
    if (this.user?.id) {
      this.requestsService
        .getUserRequests(this.user?.id, { status: 'pending' })
        .subscribe(response => {
          this.requests = response.results.slice(0, 5);
        });
    }
  }

  processRequest(requestId: number, status): void {
    this.requestsService
      .processRequest(requestId, status)
      .subscribe(response => {
        this.requests.forEach(request => {
          if (request.id === response.id) {
            request.removed = true;
            request.action = status;
            setTimeout(() => {
              // Remove item from requests array after animation
              this.requests = this.removeRequest(this.requests, request.id);
            }, 2000);
          }
        });
      });
  }

  removeRequest(requests, value): any {
    return requests.filter((req) => req.id !== value);
  }

}
