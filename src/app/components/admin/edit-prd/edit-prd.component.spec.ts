import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrdComponent } from './edit-prd.component';

describe('EditPrdComponent', () => {
  let component: EditPrdComponent;
  let fixture: ComponentFixture<EditPrdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPrdComponent]
    });
    fixture = TestBed.createComponent(EditPrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
