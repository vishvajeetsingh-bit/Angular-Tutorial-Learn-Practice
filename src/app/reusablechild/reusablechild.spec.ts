import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reusablechild } from './reusablechild';

describe('Reusablechild', () => {
  let component: Reusablechild;
  let fixture: ComponentFixture<Reusablechild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reusablechild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reusablechild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
