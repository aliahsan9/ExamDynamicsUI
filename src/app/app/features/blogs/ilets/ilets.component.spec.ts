import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IletsComponent } from './ilets.component';

describe('IletsComponent', () => {
  let component: IletsComponent;
  let fixture: ComponentFixture<IletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IletsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
