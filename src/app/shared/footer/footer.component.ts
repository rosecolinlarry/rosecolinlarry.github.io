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
  lightModeToggleControl = new FormControl(false);
  constructor(private dialog: MatDialog, private overlay: OverlayContainer) { }

  ngOnInit(): void {
    const darkClassName = 'darkMode';
    const lightClassName = 'lightMode';

    this.lightModeToggleControl.valueChanges
      .pipe(
        tap((lightMode) => {
          if (lightMode) {
            document.getElementsByClassName(lightClassName)
            document.body.classList.add(lightClassName);
            document.body.classList.remove(darkClassName);
            this.overlay.getContainerElement().classList.add(lightClassName);
            this.overlay.getContainerElement().classList.remove(darkClassName);
          }
          else {
            document.body.classList.add(darkClassName);
            document.body.classList.remove(lightClassName);
            this.overlay.getContainerElement().classList.add(darkClassName);
            this.overlay.getContainerElement().classList.remove(lightClassName);
          }
        })
      )
      .subscribe()
  }
}
