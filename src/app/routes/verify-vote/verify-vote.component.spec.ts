import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyVoteComponent } from './verify-vote.component';

describe('VerifyVoteComponent', () => {
  let component: VerifyVoteComponent;
  let fixture: ComponentFixture<VerifyVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyVoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifyVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
