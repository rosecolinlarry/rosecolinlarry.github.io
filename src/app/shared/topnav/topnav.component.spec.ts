import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavComponent } from './topnav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CodingExercisesModule } from 'src/app/coding-exercises/coding-exercises.module';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared.module';

describe('TopnavComponent', () => {
  let component: TopnavComponent;
  let fixture: ComponentFixture<TopnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopnavComponent],
      imports: [CodingExercisesModule, MatToolbarModule, MatIconModule, MatButtonModule, SharedModule]
    });
    fixture = TestBed.createComponent(TopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
