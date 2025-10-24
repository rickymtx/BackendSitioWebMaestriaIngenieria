import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CohorteGenComponent } from './cohorte-gen.component';

describe('CohorteGenComponent', () => {
  let component: CohorteGenComponent;
  let fixture: ComponentFixture<CohorteGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CohorteGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CohorteGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
