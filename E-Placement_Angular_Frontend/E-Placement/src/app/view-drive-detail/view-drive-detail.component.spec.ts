import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDriveDetailComponent } from './view-drive-detail.component';

describe('ViewDriveDetailComponent', () => {
  let component: ViewDriveDetailComponent;
  let fixture: ComponentFixture<ViewDriveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDriveDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDriveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
