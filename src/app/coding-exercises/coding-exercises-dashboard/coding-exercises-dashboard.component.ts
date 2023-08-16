import { Component } from '@angular/core';

@Component({
  selector: 'app-coding-exercises-dashboard',
  templateUrl: './coding-exercises-dashboard.component.html',
  styleUrls: ['./coding-exercises-dashboard.component.scss']
})
export class CodingExercisesDashboardComponent {
  linkData = [
    {url:'/coding-exercises/fibonacci', name: 'Fibonacci'},
    {url:'/coding-exercises/reversed-int', name: 'Reversed Integer'},
  ]
}
