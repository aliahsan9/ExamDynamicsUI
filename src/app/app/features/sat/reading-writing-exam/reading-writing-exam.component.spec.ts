import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingWritingExamComponent } from './reading-writing-exam.component';

describe('ReadingWritingExamComponent', () => {
  let component: ReadingWritingExamComponent;
  let fixture: ComponentFixture<ReadingWritingExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingWritingExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingWritingExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
