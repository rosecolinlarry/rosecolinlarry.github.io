import { Component } from '@angular/core';

@Component({
  selector: 'app-coding-exercises',
  templateUrl: './coding-exercises.component.html',
  styleUrls: ['./coding-exercises.component.scss']
})
export class CodingExercisesComponent {
  title = 'Coding Exercises';
  linkData = [
    {url:'fibonacci', name: 'Fibonacci'},
    {url:'reversed-int', name: 'Reversed Integer'},
  ]
}
