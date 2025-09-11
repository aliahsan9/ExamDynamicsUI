import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmatExamsComponent } from './gmat-exams.component';

describe('GmatExamsComponent', () => {
  let component: GmatExamsComponent;
  let fixture: ComponentFixture<GmatExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GmatExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GmatExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
