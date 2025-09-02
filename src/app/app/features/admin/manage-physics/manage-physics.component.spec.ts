import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePhysicsComponent } from './manage-physics.component';

describe('ManagePhysicsComponent', () => {
  let component: ManagePhysicsComponent;
  let fixture: ComponentFixture<ManagePhysicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePhysicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePhysicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
