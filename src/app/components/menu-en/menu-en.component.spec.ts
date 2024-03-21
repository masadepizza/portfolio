import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEnComponent } from './menu-en.component';

describe('MenuEnComponent', () => {
  let component: MenuEnComponent;
  let fixture: ComponentFixture<MenuEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuEnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
