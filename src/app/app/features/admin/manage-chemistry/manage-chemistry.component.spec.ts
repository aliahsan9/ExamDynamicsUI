import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChemistryComponent } from './manage-chemistry.component';

describe('ManageChemistryComponent', () => {
  let component: ManageChemistryComponent;
  let fixture: ComponentFixture<ManageChemistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageChemistryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageChemistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
