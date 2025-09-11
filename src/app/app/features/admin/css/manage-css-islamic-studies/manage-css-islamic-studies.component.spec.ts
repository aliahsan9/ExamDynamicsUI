import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCssIslamicStudiesComponent } from './manage-css-islamic-studies.component';

describe('ManageCssIslamicStudiesComponent', () => {
  let component: ManageCssIslamicStudiesComponent;
  let fixture: ComponentFixture<ManageCssIslamicStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCssIslamicStudiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCssIslamicStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
