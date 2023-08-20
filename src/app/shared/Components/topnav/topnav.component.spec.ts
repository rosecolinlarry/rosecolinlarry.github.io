import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavComponent } from './topnav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { CodingExercisesModule } from '../../../CodingExercises/coding-exercises.module'

describe('TopnavComponent', () => {
  let component: TopnavComponent;
  let fixture: ComponentFixture<TopnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopnavComponent],
      imports: [CodingExercisesModule, MatToolbarModule, MatIconModule,
        MatButtonModule, SharedModule, HttpClientModule,
        RouterLink, RouterModule, RouterModule.forRoot([])]
    });
    fixture = TestBed.createComponent(TopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
