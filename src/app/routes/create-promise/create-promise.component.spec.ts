import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePromiseComponent } from './create-promise.component';

describe('CreatePromiseComponent', () => {
  let component: CreatePromiseComponent;
  let fixture: ComponentFixture<CreatePromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePromiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
