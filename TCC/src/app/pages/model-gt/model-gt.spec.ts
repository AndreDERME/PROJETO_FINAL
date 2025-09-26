import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelGt } from './model-gt';

describe('ModelGt', () => {
  let component: ModelGt;
  let fixture: ComponentFixture<ModelGt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelGt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelGt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
