import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SandboxPageComponent } from './sandbox-page.component';

describe('SandboxPageComponent', () => {
  let component: SandboxPageComponent;
  let fixture: ComponentFixture<SandboxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandboxPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SandboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
