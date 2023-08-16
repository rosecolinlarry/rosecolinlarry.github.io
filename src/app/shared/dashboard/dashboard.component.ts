import { Component, Input } from '@angular/core';
import { LinkData } from '../Interfaces/link-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() linkData: LinkData[] = []
}
