import { Component } from '@angular/core';
import { EventType, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, tap } from 'rxjs'

@Component({
  selector: 'app-coding-exercises',
  templateUrl: './coding-exercises.component.html',
  styleUrls: ['./coding-exercises.component.scss']
})
export class CodingExercisesComponent {
  currentRoute = "";
  title = 'Coding Exercises';
  linkData = [
    { url: 'home', name: 'Coding Exercises' },
    { url: 'fibonacci', name: 'Fibonacci' },
    { url: 'reversed-int', name: 'Reversed Integer' },
  ]

  constructor(private router: Router) {
    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap(() => {
          this.currentRoute = this.router.url;
          if (this.currentRoute === '/coding-exercises/home') { // TODO Find more elegant way to hide coding exercises link
            this.linkData = [
              { url: 'fibonacci', name: 'Fibonacci' },
              { url: 'reversed-int', name: 'Reversed Integer' },
            ]
          }
          else {
            this.linkData = [
              { url: 'home', name: 'Back to Coding Exercises' },
              { url: 'fibonacci', name: 'Fibonacci' },
              { url: 'reversed-int', name: 'Reversed Integer' },
            ]
          }
        })
      )
      .subscribe()
  }
}
