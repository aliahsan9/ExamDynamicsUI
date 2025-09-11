import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIeltsWritingComponent } from './manage-ielts-writing.component';

describe('ManageIeltsWritingComponent', () => {
  let component: ManageIeltsWritingComponent;
  let fixture: ComponentFixture<ManageIeltsWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageIeltsWritingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageIeltsWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
