import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBackBurgerComponent } from './header-back-burger.component';

describe('HeaderBackBurgerComponent', () => {
  let component: HeaderBackBurgerComponent;
  let fixture: ComponentFixture<HeaderBackBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBackBurgerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderBackBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
