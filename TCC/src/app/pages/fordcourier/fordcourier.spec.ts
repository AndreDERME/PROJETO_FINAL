import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fordcourier } from './fordcourier';

describe('Fordcourier', () => {
  let component: Fordcourier;
  let fixture: ComponentFixture<Fordcourier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fordcourier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fordcourier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
