import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReadingWritingComponent } from './manage-reading-writing.component';

describe('ManageReadingWritingComponent', () => {
  let component: ManageReadingWritingComponent;
  let fixture: ComponentFixture<ManageReadingWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageReadingWritingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageReadingWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
