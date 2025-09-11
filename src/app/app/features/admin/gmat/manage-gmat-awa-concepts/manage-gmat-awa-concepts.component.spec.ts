import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGmatAwaConceptsComponent } from './manage-gmat-awa-concepts.component';

describe('ManageGmatAwaConceptsComponent', () => {
  let component: ManageGmatAwaConceptsComponent;
  let fixture: ComponentFixture<ManageGmatAwaConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageGmatAwaConceptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageGmatAwaConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
