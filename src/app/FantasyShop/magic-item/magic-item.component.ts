import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResourceList } from 'src/app/Shared/Interfaces/FantasyShop/resource-list';
import { MagicItem } from './magic-item';
import { MagicItemService } from '../services/magic-item.service';

@Component({
  selector: 'app-magic-item',
  templateUrl: './magic-item.component.html',
  styleUrls: ['./magic-item.component.scss']
})
export class MagicItemComponent implements OnInit {

  resourceList: ResourceList | undefined;
  magicItems: MagicItem[] = [];
  magicItem$: BehaviorSubject<MagicItem> | undefined;
  loading$ = new BehaviorSubject<boolean>(true);
  errorMessage: string;
  constructor(private magicItemService: MagicItemService) {
    this.errorMessage = "";
  }
  ngOnInit(): void {
    this.loading$.next(true);
    this.magicItemService.get()
      .subscribe({
        next: (resp) => {
          this.resourceList = resp;
          console.log(resp.count)
        },
        error: err => { this.errorMessage = err; this.loading$.next(false); },
        complete: () => { this.loading$.next(false); }
      });

    this.loading$.next(false);
  }

  getAll(): string[] {
    this.loading$.next(true);
    this.errorMessage = "";
    this.magicItemService.get()
      .subscribe({
        next: (resp) => { this.resourceList = resp; console.log(resp.count) },
        error: err => { this.errorMessage = err; this.loading$.next(false); },
        complete: () => { this.loading$.next(false); }
      })
    return this.resourceList?.results.map(x => x.index) ?? [];
  }

  getById(id: string) {
    this.loading$.next(true);
    this.errorMessage = "";
    this.magicItemService.getById(id)
      .subscribe({
        next: (resp) => { this.magicItem$?.next(resp); this.magicItems.push(resp) },
        error: (err) => { this.errorMessage = err; this.loading$.next(false); },
        complete: () => { this.loading$.next(false); }
      })
  }

  getIndices(): string[] {
    return this.resourceList?.results.map(x => x.index) ?? [];
  }

  refresh() {
    this.loading$.next(true);

    this.magicItems = []; // Clear list
    this.getAll();

    const indices = this.getIndices().slice(0, 15);

    console.log(indices)
    indices.forEach(i => {
      this.getById(i);
    });

    this.loading$.next(false);
  }

  randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
