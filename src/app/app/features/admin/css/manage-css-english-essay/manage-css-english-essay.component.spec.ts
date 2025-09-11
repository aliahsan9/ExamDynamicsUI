import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCssEnglishEssayComponent } from './manage-css-english-essay.component';

describe('ManageCssEnglishEssayComponent', () => {
  let component: ManageCssEnglishEssayComponent;
  let fixture: ComponentFixture<ManageCssEnglishEssayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCssEnglishEssayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCssEnglishEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
