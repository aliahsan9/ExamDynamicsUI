import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatDetailComponent } from './sat-detail.component';

describe('SatDetailComponent', () => {
  let component: SatDetailComponent;
  let fixture: ComponentFixture<SatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
