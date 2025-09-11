import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGmatQuantitativeReasoningComponent } from './manage-gmat-quantitative-reasoning.component';

describe('ManageGmatQuantitativeReasoningComponent', () => {
  let component: ManageGmatQuantitativeReasoningComponent;
  let fixture: ComponentFixture<ManageGmatQuantitativeReasoningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageGmatQuantitativeReasoningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageGmatQuantitativeReasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
