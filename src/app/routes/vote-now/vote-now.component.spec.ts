import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteNowComponent } from './vote-now.component';

describe('VoteNowComponent', () => {
  let component: VoteNowComponent;
  let fixture: ComponentFixture<VoteNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoteNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
