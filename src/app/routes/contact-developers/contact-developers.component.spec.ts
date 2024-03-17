import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDevelopersComponent } from './contact-developers.component';

describe('ContactDevelopersComponent', () => {
  let component: ContactDevelopersComponent;
  let fixture: ComponentFixture<ContactDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactDevelopersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
