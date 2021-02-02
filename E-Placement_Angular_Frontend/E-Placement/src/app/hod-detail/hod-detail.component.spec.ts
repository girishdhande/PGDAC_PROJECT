import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodDetailComponent } from './hod-detail.component';

describe('HodDetailComponent', () => {
  let component: HodDetailComponent;
  let fixture: ComponentFixture<HodDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
