import { Component, Input } from '@angular/core';
import { LinkData } from '../Interfaces/link-data';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent {
  @Input() title = "Redemption Arc";
  @Input() linkData: LinkData[] = [];
}
