import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGmatIntegratedReasoningComponent } from './manage-gmat-integrated-reasoning.component';

describe('ManageGmatIntegratedReasoningComponent', () => {
  let component: ManageGmatIntegratedReasoningComponent;
  let fixture: ComponentFixture<ManageGmatIntegratedReasoningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageGmatIntegratedReasoningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageGmatIntegratedReasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
