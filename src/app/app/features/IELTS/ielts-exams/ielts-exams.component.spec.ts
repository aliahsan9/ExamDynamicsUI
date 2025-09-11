import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeltsExamsComponent } from './ielts-exams.component';

describe('IeltsExamsComponent', () => {
  let component: IeltsExamsComponent;
  let fixture: ComponentFixture<IeltsExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IeltsExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IeltsExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
