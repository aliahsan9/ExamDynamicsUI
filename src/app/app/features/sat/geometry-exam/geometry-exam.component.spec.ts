import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometryExamComponent } from './geometry-exam.component';

describe('GeometryExamComponent', () => {
  let component: GeometryExamComponent;
  let fixture: ComponentFixture<GeometryExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeometryExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeometryExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
