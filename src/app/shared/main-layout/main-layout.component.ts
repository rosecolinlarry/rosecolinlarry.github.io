import { Component } from '@angular/core';
import { LinkData } from '../Interfaces/link-data';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  title = "Redemption Arc";
  linkData: LinkData[] = [
    { url: '/coding-exercises/home', name: 'Coding Exercises' },
    { url: '/fantasy-shop/store-front', name: 'Fantasy Shop (WIP)' }
  ]
}
