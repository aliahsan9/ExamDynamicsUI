import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCssPoliticalScienceComponent } from './manage-css-political-science.component';

describe('ManageCssPoliticalScienceComponent', () => {
  let component: ManageCssPoliticalScienceComponent;
  let fixture: ComponentFixture<ManageCssPoliticalScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCssPoliticalScienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCssPoliticalScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
