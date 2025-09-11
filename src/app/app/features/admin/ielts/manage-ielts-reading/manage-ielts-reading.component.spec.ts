import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIeltsReadingComponent } from './manage-ielts-reading.component';

describe('ManageIeltsReadingComponent', () => {
  let component: ManageIeltsReadingComponent;
  let fixture: ComponentFixture<ManageIeltsReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageIeltsReadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageIeltsReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
