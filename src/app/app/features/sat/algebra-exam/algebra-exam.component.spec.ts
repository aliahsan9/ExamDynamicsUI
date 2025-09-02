import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgebraExamComponent } from './algebra-exam.component';

describe('AlgebraExamComponent', () => {
  let component: AlgebraExamComponent;
  let fixture: ComponentFixture<AlgebraExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgebraExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgebraExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
