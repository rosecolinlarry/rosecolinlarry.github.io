import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicItemComponent } from './magic-item.component';
import { RouterLink, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/Shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('MagicItemComponent', () => {
  let component: MagicItemComponent;
  let fixture: ComponentFixture<MagicItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MagicItemComponent],
      imports: [
        RouterModule,
        SharedModule,
        RouterLink,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule]
    });
    fixture = TestBed.createComponent(MagicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
