import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HscschoolDetailComponent } from './hscschool-detail.component';

describe('HscschoolDetailComponent', () => {
  let component: HscschoolDetailComponent;
  let fixture: ComponentFixture<HscschoolDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HscschoolDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HscschoolDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
