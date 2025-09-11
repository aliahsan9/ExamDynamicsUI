import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcatQuizComponent } from './ecat-quiz.component';

describe('EcatQuizComponent', () => {
  let component: EcatQuizComponent;
  let fixture: ComponentFixture<EcatQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcatQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcatQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
