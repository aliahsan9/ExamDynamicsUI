import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGeometryComponent } from './manage-geometry.component';

describe('ManageGeometryComponent', () => {
  let component: ManageGeometryComponent;
  let fixture: ComponentFixture<ManageGeometryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageGeometryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageGeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
