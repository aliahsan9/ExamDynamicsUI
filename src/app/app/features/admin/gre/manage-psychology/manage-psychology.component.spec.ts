import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePsychologyComponent } from './manage-psychology.component';

describe('ManagePsychologyComponent', () => {
  let component: ManagePsychologyComponent;
  let fixture: ComponentFixture<ManagePsychologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePsychologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePsychologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
