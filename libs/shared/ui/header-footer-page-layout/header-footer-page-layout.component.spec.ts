import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderFooterPageLayoutComponent } from './header-footer-page-layout.component';

describe('HeaderFooterPageLayoutComponent', () => {
  let component: HeaderFooterPageLayoutComponent;
  let fixture: ComponentFixture<HeaderFooterPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFooterPageLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderFooterPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
