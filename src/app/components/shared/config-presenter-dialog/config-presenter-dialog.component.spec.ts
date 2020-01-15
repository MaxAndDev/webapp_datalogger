import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPresenterDialogComponent } from './config-presenter-dialog.component';

describe('ConfigPresenterDialogComponent', () => {
  let component: ConfigPresenterDialogComponent;
  let fixture: ComponentFixture<ConfigPresenterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPresenterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPresenterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
