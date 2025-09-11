import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmatComponent } from './gmat.component';

describe('GmatComponent', () => {
  let component: GmatComponent;
  let fixture: ComponentFixture<GmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GmatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
