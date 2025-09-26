import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFusion } from './model-fusion';

describe('ModelFusion', () => {
  let component: ModelFusion;
  let fixture: ComponentFixture<ModelFusion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelFusion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelFusion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
