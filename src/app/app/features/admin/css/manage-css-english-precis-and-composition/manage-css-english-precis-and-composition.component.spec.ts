import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCssEnglishPrecisAndCompositionComponent } from './manage-css-english-precis-and-composition.component';

describe('ManageCssEnglishPrecisAndCompositionComponent', () => {
  let component: ManageCssEnglishPrecisAndCompositionComponent;
  let fixture: ComponentFixture<ManageCssEnglishPrecisAndCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCssEnglishPrecisAndCompositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCssEnglishPrecisAndCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
