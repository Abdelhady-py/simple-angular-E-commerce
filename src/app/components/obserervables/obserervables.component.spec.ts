import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserervablesComponent } from './obserervables.component';

describe('ObserervablesComponent', () => {
  let component: ObserervablesComponent;
  let fixture: ComponentFixture<ObserervablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObserervablesComponent]
    });
    fixture = TestBed.createComponent(ObserervablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
