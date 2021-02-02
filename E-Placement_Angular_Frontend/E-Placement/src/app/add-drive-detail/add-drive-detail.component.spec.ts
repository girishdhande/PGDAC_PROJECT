import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDriveDetailComponent } from './add-drive-detail.component';

describe('AddDriveDetailComponent', () => {
  let component: AddDriveDetailComponent;
  let fixture: ComponentFixture<AddDriveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDriveDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDriveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
