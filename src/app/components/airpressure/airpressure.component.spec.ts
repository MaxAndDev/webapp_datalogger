import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirpressureComponent } from './airpressure.component';

describe('AirpressureComponent', () => {
  let component: AirpressureComponent;
  let fixture: ComponentFixture<AirpressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirpressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirpressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
