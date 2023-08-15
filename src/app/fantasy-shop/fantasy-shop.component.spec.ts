import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyShopComponent } from './fantasy-shop.component';
import { TopnavComponent } from '../shared/topnav/topnav.component';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
describe('FantasyShopComponent', () => {
  let component: FantasyShopComponent;
  let fixture: ComponentFixture<FantasyShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FantasyShopComponent],
      imports: [ RouterOutlet, SharedModule]
    });
    fixture = TestBed.createComponent(FantasyShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
