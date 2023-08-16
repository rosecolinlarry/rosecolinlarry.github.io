import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);
  constructor(private dialog: MatDialog, private overlay: OverlayContainer) { }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    this.toggleControl.valueChanges
      .pipe(
        tap((darkMode) => {
          const darkClassName = 'darkMode';
          this.className = darkMode ? darkClassName : '';
          if (darkMode) {
            this.overlay.getContainerElement().classList.add(darkClassName);
            body.classList.add(darkClassName);
          }
          else {
            this.overlay.getContainerElement().classList.remove(darkClassName);
            body.classList.remove(darkClassName);
          }
        })
      )
      .subscribe()
  }
}
