import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGmatExamsComponent } from './all-gmat-exams.component';

describe('AllGmatExamsComponent', () => {
  let component: AllGmatExamsComponent;
  let fixture: ComponentFixture<AllGmatExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllGmatExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllGmatExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
