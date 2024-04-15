import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorefrontComponent } from './storefront.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MagicItemModule } from '../magic-item/magic-item.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

describe('StorefrontComponent', () => {
  let component: StorefrontComponent;
  let fixture: ComponentFixture<StorefrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorefrontComponent],
      imports: [SharedModule, MagicItemModule, MatButtonModule, HttpClientModule]
    });
    fixture = TestBed.createComponent(StorefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
