import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPhysicsComponent } from './exam-physics.component';

describe('ExamPhysicsComponent', () => {
  let component: ExamPhysicsComponent;
  let fixture: ComponentFixture<ExamPhysicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamPhysicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamPhysicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
