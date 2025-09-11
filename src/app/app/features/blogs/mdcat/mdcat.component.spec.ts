import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdcatComponent } from './mdcat.component';

describe('MdcatComponent', () => {
  let component: MdcatComponent;
  let fixture: ComponentFixture<MdcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdcatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
