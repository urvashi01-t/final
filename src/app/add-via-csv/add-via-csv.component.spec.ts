import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddViaCSVComponent } from './add-via-csv.component';

describe('AddViaCSVComponent', () => {
  let component: AddViaCSVComponent;
  let fixture: ComponentFixture<AddViaCSVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddViaCSVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddViaCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
