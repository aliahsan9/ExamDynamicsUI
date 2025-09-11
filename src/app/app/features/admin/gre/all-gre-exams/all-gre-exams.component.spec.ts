import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGreExamsComponent } from './all-gre-exams.component';

describe('AllGreExamsComponent', () => {
  let component: AllGreExamsComponent;
  let fixture: ComponentFixture<AllGreExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllGreExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllGreExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
