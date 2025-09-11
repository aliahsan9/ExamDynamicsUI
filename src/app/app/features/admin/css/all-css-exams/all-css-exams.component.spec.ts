import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCssExamsComponent } from './all-css-exams.component';

describe('AllCssExamsComponent', () => {
  let component: AllCssExamsComponent;
  let fixture: ComponentFixture<AllCssExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCssExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCssExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
