import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBiologyComponent } from './manage-biology.component';

describe('ManageBiologyComponent', () => {
  let component: ManageBiologyComponent;
  let fixture: ComponentFixture<ManageBiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBiologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
