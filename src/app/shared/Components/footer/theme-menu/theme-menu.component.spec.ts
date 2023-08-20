import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeMenuComponent } from './theme-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';

describe('ThemeMenuComponent', () => {
  let component: ThemeMenuComponent;
  let fixture: ComponentFixture<ThemeMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeMenuComponent],
      imports: [MatIconModule, MatMenuModule, HttpClientModule, RouterLink, RouterModule, RouterModule.forRoot([])]
    });
    fixture = TestBed.createComponent(ThemeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
