import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMathComponent } from './manage-math.component';

describe('ManageMathComponent', () => {
  let component: ManageMathComponent;
  let fixture: ComponentFixture<ManageMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
