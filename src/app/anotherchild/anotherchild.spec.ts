import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anotherchild } from './anotherchild';

describe('Anotherchild', () => {
  let component: Anotherchild;
  let fixture: ComponentFixture<Anotherchild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anotherchild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anotherchild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
