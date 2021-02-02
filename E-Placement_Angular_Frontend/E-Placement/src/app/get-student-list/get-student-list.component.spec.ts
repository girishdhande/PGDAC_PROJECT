import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStudentListComponent } from './get-student-list.component';

describe('GetStudentListComponent', () => {
  let component: GetStudentListComponent;
  let fixture: ComponentFixture<GetStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStudentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
