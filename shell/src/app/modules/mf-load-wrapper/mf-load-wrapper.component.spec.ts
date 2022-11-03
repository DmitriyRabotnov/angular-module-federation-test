import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfLoadWrapperComponent } from './mf-load-wrapper.component';

describe('MfLoadWrapperComponent', () => {
  let component: MfLoadWrapperComponent;
  let fixture: ComponentFixture<MfLoadWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfLoadWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfLoadWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
