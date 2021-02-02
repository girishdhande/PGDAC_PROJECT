import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpoDetailComponent } from './tpo-detail.component';

describe('TpoDetailComponent', () => {
  let component: TpoDetailComponent;
  let fixture: ComponentFixture<TpoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
