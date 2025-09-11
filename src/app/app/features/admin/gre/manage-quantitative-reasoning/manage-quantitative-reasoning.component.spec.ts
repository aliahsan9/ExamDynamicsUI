import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuantitativeReasoningComponent } from './manage-quantitative-reasoning.component';

describe('ManageQuantitativeReasoningComponent', () => {
  let component: ManageQuantitativeReasoningComponent;
  let fixture: ComponentFixture<ManageQuantitativeReasoningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageQuantitativeReasoningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageQuantitativeReasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
