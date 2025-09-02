import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalysisExamComponent } from './data-analysis-exam.component';

describe('DataAnalysisExamComponent', () => {
  let component: DataAnalysisExamComponent;
  let fixture: ComponentFixture<DataAnalysisExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAnalysisExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAnalysisExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
