import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { format } from 'date-fns';
import { User, Occurrence } from 'src/app/data.models';
import { getTodaysDate, parseDate } from 'src/app/utils';
import { TimetableService } from 'src/app/services/timetable.service';

@Component({
  selector: 'app-todays-classes-widget',
  templateUrl: './todays-classes-widget.component.html',
  styleUrls: ['./todays-classes-widget.component.scss']
})
export class TodaysClassesWidgetComponent implements OnInit {

  user: User;
  occurrences: Occurrence[];
  showNavigationArrows = false;
  interval = 10000;

  constructor(
    private cookieService: CookieService,
    private timetableService: TimetableService,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user') || null);
    const todaysDate = getTodaysDate();
    const params = {
      start: todaysDate.startDate,
      end: todaysDate.endDate,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    if (this.user?.calendar) {
      this.timetableService
        .getOccurrences(this.user?.calendar, params)
        .subscribe(response => {
          this.occurrences = response;
        });
    }
  }

  formatTime(dateTimeString): string {
    return format(parseDate(dateTimeString), 'h:mm aaaa');
  }

}
