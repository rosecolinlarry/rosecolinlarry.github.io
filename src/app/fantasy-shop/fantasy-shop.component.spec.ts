import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyShopComponent } from './fantasy-shop.component';

describe('FantasyShopComponent', () => {
  let component: FantasyShopComponent;
  let fixture: ComponentFixture<FantasyShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FantasyShopComponent]
    });
    fixture = TestBed.createComponent(FantasyShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
