import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleoBasicoComponent } from './nucleo-basico.component';

describe('NucleoBasicoComponent', () => {
  let component: NucleoBasicoComponent;
  let fixture: ComponentFixture<NucleoBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NucleoBasicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NucleoBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
