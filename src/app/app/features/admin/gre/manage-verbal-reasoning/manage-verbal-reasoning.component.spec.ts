import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVerbalReasoningComponent } from './manage-verbal-reasoning.component';

describe('ManageVerbalReasoningComponent', () => {
  let component: ManageVerbalReasoningComponent;
  let fixture: ComponentFixture<ManageVerbalReasoningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageVerbalReasoningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageVerbalReasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
