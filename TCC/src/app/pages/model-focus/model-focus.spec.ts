import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFocus } from './model-focus';

describe('ModelFocus', () => {
  let component: ModelFocus;
  let fixture: ComponentFixture<ModelFocus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelFocus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelFocus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
