import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGmatVerbalReasoningComponent } from './manage-gmat-verbal-reasoning.component';

describe('ManageGmatVerbalReasoningComponent', () => {
  let component: ManageGmatVerbalReasoningComponent;
  let fixture: ComponentFixture<ManageGmatVerbalReasoningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageGmatVerbalReasoningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageGmatVerbalReasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
