import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDataAnalysisComponent } from './manage-data-analysis.component';

describe('ManageDataAnalysisComponent', () => {
  let component: ManageDataAnalysisComponent;
  let fixture: ComponentFixture<ManageDataAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDataAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDataAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
