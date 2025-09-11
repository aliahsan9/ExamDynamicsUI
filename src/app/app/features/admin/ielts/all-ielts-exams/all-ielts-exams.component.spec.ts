import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIeltsExamsComponent } from './all-ielts-exams.component';

describe('AllIeltsExamsComponent', () => {
  let component: AllIeltsExamsComponent;
  let fixture: ComponentFixture<AllIeltsExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllIeltsExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllIeltsExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
