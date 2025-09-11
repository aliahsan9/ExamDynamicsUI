import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCssInternationalRelationsComponent } from './manage-css-international-relations.component';

describe('ManageCssInternationalRelationsComponent', () => {
  let component: ManageCssInternationalRelationsComponent;
  let fixture: ComponentFixture<ManageCssInternationalRelationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCssInternationalRelationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCssInternationalRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
