import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveCompanyComponent } from './drive-company.component';

describe('DriveCompanyComponent', () => {
  let component: DriveCompanyComponent;
  let fixture: ComponentFixture<DriveCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
