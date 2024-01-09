import {Component, OnInit} from '@angular/core';
import {NotificationsService} from '../services/notifications.service';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Toast } from '@capacitor/toast';
import { NotificationItemComponent } from '../components/notification-item/notification-item.component';

@Component({
  selector: 'app-notification-list',
  templateUrl: 'notification-list.page.html',
  styleUrls: ['notification-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, NotificationItemComponent],
})
export class NotificationListPage implements OnInit {
  public notifications: LocalNotification[] = [];
  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsService.getNotifications().subscribe((notifications) => {      
      this.notifications = notifications;
    });
  }

  public async readNotificationItem(notification : LocalNotification){
    this.notificationsService.readNotification(notification);
  }
}
