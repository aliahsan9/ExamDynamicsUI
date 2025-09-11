import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCssCurrentAffairsComponent } from './manage-css-current-affairs.component';

describe('ManageCssCurrentAffairsComponent', () => {
  let component: ManageCssCurrentAffairsComponent;
  let fixture: ComponentFixture<ManageCssCurrentAffairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCssCurrentAffairsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCssCurrentAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
