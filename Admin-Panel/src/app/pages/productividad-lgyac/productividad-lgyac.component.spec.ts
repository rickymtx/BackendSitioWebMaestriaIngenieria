import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductividadLgyacComponent } from './productividad-lgyac.component';

describe('ProductividadLgyacComponent', () => {
  let component: ProductividadLgyacComponent;
  let fixture: ComponentFixture<ProductividadLgyacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductividadLgyacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductividadLgyacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
