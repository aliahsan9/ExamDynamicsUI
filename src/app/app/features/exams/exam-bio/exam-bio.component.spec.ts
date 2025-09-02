import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamBioComponent } from './exam-bio.component';

describe('ExamBioComponent', () => {
  let component: ExamBioComponent;
  let fixture: ComponentFixture<ExamBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamBioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
