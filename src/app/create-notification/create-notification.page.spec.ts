import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNotificationPage } from './create-notification.page';

describe('CreateNotificationPage', () => {
  let component: CreateNotificationPage;
  let fixture: ComponentFixture<CreateNotificationPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(CreateNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
