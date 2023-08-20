import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicItemCardComponent } from './magic-item-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

describe('MagicItemCardComponent', () => {
  let component: MagicItemCardComponent;
  let fixture: ComponentFixture<MagicItemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MagicItemCardComponent],
      imports: [HttpClientModule, MatIconModule, MatCardModule]
    });
    fixture = TestBed.createComponent(MagicItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
