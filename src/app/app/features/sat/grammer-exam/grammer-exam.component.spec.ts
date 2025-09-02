import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammerExamComponent } from './grammer-exam.component';

describe('GrammerExamComponent', () => {
  let component: GrammerExamComponent;
  let fixture: ComponentFixture<GrammerExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammerExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrammerExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
