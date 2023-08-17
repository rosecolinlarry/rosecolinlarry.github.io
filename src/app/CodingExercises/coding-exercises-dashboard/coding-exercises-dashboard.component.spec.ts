import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodingExercisesDashboardComponent } from './coding-exercises-dashboard.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { RouterModule } from '@angular/router';


describe('CodingExercisesDashboardComponent', () => {
  let component: CodingExercisesDashboardComponent;
  let fixture: ComponentFixture<CodingExercisesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodingExercisesDashboardComponent],
      imports: [SharedModule, RouterModule, RouterModule.forRoot([])]
    });
    fixture = TestBed.createComponent(CodingExercisesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
