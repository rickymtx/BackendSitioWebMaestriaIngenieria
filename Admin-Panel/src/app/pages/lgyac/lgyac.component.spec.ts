import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgyacComponent } from './lgyac.component';

describe('LgyacComponent', () => {
  let component: LgyacComponent;
  let fixture: ComponentFixture<LgyacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgyacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgyacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
