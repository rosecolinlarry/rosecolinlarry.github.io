import { Component, Input } from '@angular/core';
import { LinkData } from '../interfaces/link-data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() linkData: LinkData[] = []
}