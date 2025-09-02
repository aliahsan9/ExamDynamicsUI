import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamMathComponent } from './exam-math.component';

describe('ExamMathComponent', () => {
  let component: ExamMathComponent;
  let fixture: ComponentFixture<ExamMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamMathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
