import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleExample } from './lifecycle-example';

describe('LifecycleExample', () => {
  let component: LifecycleExample;
  let fixture: ComponentFixture<LifecycleExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
