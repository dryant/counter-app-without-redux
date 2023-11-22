import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranddaughterComponent } from './granddaughter.component';

describe('GranddaughterComponent', () => {
  let component: GranddaughterComponent;
  let fixture: ComponentFixture<GranddaughterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GranddaughterComponent]
    });
    fixture = TestBed.createComponent(GranddaughterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
