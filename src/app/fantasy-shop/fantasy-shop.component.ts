import { Component } from '@angular/core';
import { LinkData } from '../shared/Interfaces/link-data';

@Component({
  selector: 'app-fantasy-shop',
  templateUrl: './fantasy-shop.component.html',
  styleUrls: ['./fantasy-shop.component.scss']
})
export class FantasyShopComponent {
  title = "Fantasy Shop";
  linkData: LinkData[] = [];
}
