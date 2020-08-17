import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsenseComponent } from './bsense.component';

describe('BsenseComponent', () => {
  let component: BsenseComponent;
  let fixture: ComponentFixture<BsenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
