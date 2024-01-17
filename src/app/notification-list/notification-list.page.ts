import {Component, OnInit} from '@angular/core';
import {NotificationsService} from '../services/notifications.service';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import { NotificationItemComponent } from './notification-item/notification-item.component';

@Component({
  selector: 'app-notification-list',
  templateUrl: 'notification-list.page.html',
  styleUrls: ['notification-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, NotificationItemComponent]
})
export class NotificationListPage implements OnInit {
  notifications: LocalNotification[] = [];
  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsService.getNotifications().then(notifications => {
      this.notifications = notifications;
    });
  }

  changeStatusToRead(notification: any): void {
    const updatedNotification = {...notification, status: "read"};
    this.notificationsService.updateNotification(updatedNotification);
  }
}
