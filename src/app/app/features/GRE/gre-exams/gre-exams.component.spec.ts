import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreExamsComponent } from './gre-exams.component';

describe('GreExamsComponent', () => {
  let component: GreExamsComponent;
  let fixture: ComponentFixture<GreExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
