import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGrammerComponent } from './manage-grammer.component';

describe('ManageGrammerComponent', () => {
  let component: ManageGrammerComponent;
  let fixture: ComponentFixture<ManageGrammerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageGrammerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageGrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
