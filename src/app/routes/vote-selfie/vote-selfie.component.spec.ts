import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSelfieComponent } from './vote-selfie.component';

describe('VoteSelfieComponent', () => {
  let component: VoteSelfieComponent;
  let fixture: ComponentFixture<VoteSelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteSelfieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoteSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
