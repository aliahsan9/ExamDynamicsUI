import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIeltsSpeakingComponent } from './manage-ielts-speaking.component';

describe('ManageIeltsSpeakingComponent', () => {
  let component: ManageIeltsSpeakingComponent;
  let fixture: ComponentFixture<ManageIeltsSpeakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageIeltsSpeakingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageIeltsSpeakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
