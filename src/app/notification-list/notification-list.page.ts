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

    if(notification.status.match("unread")){
      notification.status = "read";

      const { display } = await LocalNotifications.checkPermissions();
      console.log("permissions status", display);

      if(display.match("granted")){
        LocalNotifications.schedule({
          notifications: [
            {
              title: '¡Hola!',
              body: 'Acabas de marcar la notificación como vista :)',
              id: 1,
              schedule: { at: new Date(Date.now())},
              actionTypeId: '',
              extra: null,
            },
          ],
        });
      }else{
        Toast.show({text:"No has permitido el envío de notificaciones."});
      }
      
      
    }
  }
}
