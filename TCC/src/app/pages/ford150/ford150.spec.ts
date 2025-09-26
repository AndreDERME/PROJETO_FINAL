import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ford150 } from './ford150';

describe('Ford150', () => {
  let component: Ford150;
  let fixture: ComponentFixture<Ford150>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ford150]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ford150);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
