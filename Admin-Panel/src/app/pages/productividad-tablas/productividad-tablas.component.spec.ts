import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductividadTablasComponent } from './productividad-tablas.component';

describe('ProductividadTablasComponent', () => {
  let component: ProductividadTablasComponent;
  let fixture: ComponentFixture<ProductividadTablasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductividadTablasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductividadTablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
