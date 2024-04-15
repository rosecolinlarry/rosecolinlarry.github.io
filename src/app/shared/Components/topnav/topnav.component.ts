import { Component, Input } from '@angular/core';
import { LinkData } from '../../interfaces/link-data.model';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent {
  @Input() title = "Redemption Arc";
  @Input() linkData: LinkData[] = [];
}
