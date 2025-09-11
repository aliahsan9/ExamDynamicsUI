import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCssGeneralScienceComponent } from './manage-css-general-science.component';

describe('ManageCssGeneralScienceComponent', () => {
  let component: ManageCssGeneralScienceComponent;
  let fixture: ComponentFixture<ManageCssGeneralScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCssGeneralScienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCssGeneralScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
