import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationDetailComponent } from './graduation-detail.component';

describe('GraduationDetailComponent', () => {
  let component: GraduationDetailComponent;
  let fixture: ComponentFixture<GraduationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
