import {Component, OnInit} from '@angular/core';
import {NotificationsService} from '../services/notifications.service';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-notification-list',
  templateUrl: 'notification-list.page.html',
  styleUrls: ['notification-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class NotificationListPage implements OnInit {
  notifications: LocalNotification[] = [];
  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsService.getNotifications().subscribe(notifications => {
      this.notifications = notifications;
    });
  }

  changeStatusToRead(notification: any): void {
    const updatedNotification = {...notification, status: "read"};
    this.notificationsService.updateNotification(updatedNotification);
  }
}
