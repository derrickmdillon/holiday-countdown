import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holiday-countdown';
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor() {
    const countDown = setInterval(() => {
      const countDownDate = new Date('June 1, 2022 00:00:00').getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (this.days === 0) {
        clearInterval(countDown);
      }
    }, 1000);
  }
}
