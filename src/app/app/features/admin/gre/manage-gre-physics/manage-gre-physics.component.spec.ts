import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGrePhysicsComponent } from './manage-gre-physics.component';

describe('ManageGrePhysicsComponent', () => {
  let component: ManageGrePhysicsComponent;
  let fixture: ComponentFixture<ManageGrePhysicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageGrePhysicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageGrePhysicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
