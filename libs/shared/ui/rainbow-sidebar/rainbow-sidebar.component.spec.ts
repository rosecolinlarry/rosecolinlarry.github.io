import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RainbowSidebarComponent } from './rainbow-sidebar.component';

describe('RainbowSidebarComponent', () => {
  let component: RainbowSidebarComponent;
  let fixture: ComponentFixture<RainbowSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RainbowSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RainbowSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
