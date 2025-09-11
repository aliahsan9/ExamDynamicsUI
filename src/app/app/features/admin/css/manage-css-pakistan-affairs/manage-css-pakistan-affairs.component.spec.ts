import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCssPakistanAffairsComponent } from './manage-css-pakistan-affairs.component';

describe('ManageCssPakistanAffairsComponent', () => {
  let component: ManageCssPakistanAffairsComponent;
  let fixture: ComponentFixture<ManageCssPakistanAffairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCssPakistanAffairsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCssPakistanAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
