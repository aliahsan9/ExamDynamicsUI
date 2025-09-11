import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdcatQuizComponent } from './mdcat-quiz.component';

describe('MdcatQuizComponent', () => {
  let component: MdcatQuizComponent;
  let fixture: ComponentFixture<MdcatQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdcatQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdcatQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
