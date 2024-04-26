import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimatedSidebarToggleButtonComponent } from './animated-sidebar-toggle-button.component';

describe('AnimatedSidebarToggleButtonComponent', () => {
  let component: AnimatedSidebarToggleButtonComponent;
  let fixture: ComponentFixture<AnimatedSidebarToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedSidebarToggleButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimatedSidebarToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
