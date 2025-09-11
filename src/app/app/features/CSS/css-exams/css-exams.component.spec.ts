import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssExamsComponent } from './css-exams.component';

describe('CssExamsComponent', () => {
  let component: CssExamsComponent;
  let fixture: ComponentFixture<CssExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
