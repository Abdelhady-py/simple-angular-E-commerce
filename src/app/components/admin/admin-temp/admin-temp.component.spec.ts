import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTempComponent } from './admin-temp.component';

describe('UserTempComponent', () => {
  let component: AdminTempComponent;
  let fixture: ComponentFixture<AdminTempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTempComponent]
    });
    fixture = TestBed.createComponent(AdminTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
