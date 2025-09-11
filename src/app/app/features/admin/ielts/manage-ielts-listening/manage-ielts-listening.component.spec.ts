import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIeltsListeningComponent } from './manage-ielts-listening.component';

describe('ManageIeltsListeningComponent', () => {
  let component: ManageIeltsListeningComponent;
  let fixture: ComponentFixture<ManageIeltsListeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageIeltsListeningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageIeltsListeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
