import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamChemistryComponent } from './exam-chemistry.component';

describe('ExamChemistryComponent', () => {
  let component: ExamChemistryComponent;
  let fixture: ComponentFixture<ExamChemistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamChemistryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamChemistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
