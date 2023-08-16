import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyShopComponent } from './fantasy-shop.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FantasyShopRoutingModule } from './fantasy-shop-routing.module';
import { MagicItemModule } from './magic-item/magic-item.module';
import { StorefrontModule } from './storefront/storefront.module';
import { HttpClientModule } from '@angular/common/http';
describe('FantasyShopComponent', () => {
  let component: FantasyShopComponent;
  let fixture: ComponentFixture<FantasyShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FantasyShopComponent],
      imports: [RouterOutlet, SharedModule, RouterModule,
        MagicItemModule, StorefrontModule, FantasyShopRoutingModule,
        MagicItemModule, RouterLink, HttpClientModule, RouterModule.forRoot([])]
    });
    fixture = TestBed.createComponent(FantasyShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
