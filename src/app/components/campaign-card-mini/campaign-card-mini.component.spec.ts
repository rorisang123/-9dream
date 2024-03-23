import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCardMiniComponent } from './campaign-card-mini.component';

describe('CampaignCardMiniComponent', () => {
  let component: CampaignCardMiniComponent;
  let fixture: ComponentFixture<CampaignCardMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignCardMiniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignCardMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
