import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAlgebraComponent } from './manage-algebra.component';

describe('ManageAlgebraComponent', () => {
  let component: ManageAlgebraComponent;
  let fixture: ComponentFixture<ManageAlgebraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAlgebraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAlgebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
