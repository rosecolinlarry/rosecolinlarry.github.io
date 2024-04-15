import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { CodingExercisesComponent } from './coding-exercises.component';
import { RouterModule } from '@angular/router';
import { CodingExercisesModule } from './coding-exercises.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

describe('CodingExercisesComponent', () => {
  let component: CodingExercisesComponent;
  let fixture: ComponentFixture<CodingExercisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule, CodingExercisesModule, SharedModule, HttpClientModule],
      declarations: [CodingExercisesComponent]
    });
    fixture = TestBed.createComponent(CodingExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Coding Exercises'`, () => {
    const fixture = TestBed.createComponent(CodingExercisesComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Coding Exercises');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CodingExercisesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-topnav > mat-toolbar > mat-toolbar-row > span')?.textContent).toEqual('Coding Exercises');
  });
});
