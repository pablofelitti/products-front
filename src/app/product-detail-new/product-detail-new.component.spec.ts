import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailNetComponent } from './product-detail-net.component';

describe('ProductDetailNetComponent', () => {
  let component: ProductDetailNetComponent;
  let fixture: ComponentFixture<ProductDetailNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailNetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
