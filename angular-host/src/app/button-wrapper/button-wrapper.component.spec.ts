import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWrapperComponent } from './button-wrapper.component';

describe('ButtonWrapperComponent', () => {
  let component: ButtonWrapperComponent;
  let fixture: ComponentFixture<ButtonWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonWrapperComponent]
    });
    fixture = TestBed.createComponent(ButtonWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
