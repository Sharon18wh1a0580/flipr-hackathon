import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsebseComponent } from './nsebse.component';

describe('NsebseComponent', () => {
  let component: NsebseComponent;
  let fixture: ComponentFixture<NsebseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsebseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsebseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
