import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoutRouteComponent } from './not-fout-route.component';

describe('NotFoutRouteComponent', () => {
  let component: NotFoutRouteComponent;
  let fixture: ComponentFixture<NotFoutRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoutRouteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoutRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
