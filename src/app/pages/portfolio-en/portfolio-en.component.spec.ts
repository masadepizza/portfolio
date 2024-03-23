import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEnComponent } from './portfolio-en.component';

describe('PortfolioEnComponent', () => {
  let component: PortfolioEnComponent;
  let fixture: ComponentFixture<PortfolioEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioEnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
