import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGreMathComponent } from './manage-gre-math.component';

describe('ManageGreMathComponent', () => {
  let component: ManageGreMathComponent;
  let fixture: ComponentFixture<ManageGreMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageGreMathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageGreMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
