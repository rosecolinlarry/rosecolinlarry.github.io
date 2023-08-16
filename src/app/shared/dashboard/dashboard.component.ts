import { Component, Input } from '@angular/core';
import { LinkData } from '../Interfaces/link-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() linkData: LinkData[] = []

  constructor() {
    this.linkData = [
      {url: '/coding-exercises/fibonacci', name: 'Fibonacci'},
      {url: '/coding-exercises/reversed-int', name: 'Reversed Integer'},
      {url: '/fantasy-shop', name: 'Fantasy Shop'},
    ]
  }
}
