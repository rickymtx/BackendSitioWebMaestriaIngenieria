import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosGradoComponent } from './requisitos-grado.component';

describe('RequisitosGradoComponent', () => {
  let component: RequisitosGradoComponent;
  let fixture: ComponentFixture<RequisitosGradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequisitosGradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitosGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
