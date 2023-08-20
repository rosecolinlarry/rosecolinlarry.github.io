import { Component, Input } from '@angular/core';
import { MagicItem } from '../magic-item';

@Component({
  selector: 'app-magic-item-card',
  templateUrl: './magic-item-card.component.html',
  styleUrls: ['./magic-item-card.component.scss']
})
export class MagicItemCardComponent {
  @Input() item: MagicItem;

  constructor() {
    this.item = new MagicItem();
  }
}
