import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintesisPlanComponent } from './sintesis-plan.component';

describe('SintesisPlanComponent', () => {
  let component: SintesisPlanComponent;
  let fixture: ComponentFixture<SintesisPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SintesisPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SintesisPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
