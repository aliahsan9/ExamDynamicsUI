import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGreChemistryComponent } from './manage-gre-chemistry.component';

describe('ManageGreChemistryComponent', () => {
  let component: ManageGreChemistryComponent;
  let fixture: ComponentFixture<ManageGreChemistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageGreChemistryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageGreChemistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
