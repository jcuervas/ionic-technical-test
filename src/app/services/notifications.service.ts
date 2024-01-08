import {Injectable} from '@angular/core';
import {notifications} from '../../fixtures/notifications';
import {of} from 'rxjs';
import {v4 as uuidv4} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor() {
  }

  getNotifications() {
    return of(notifications);
  }

  addNotification(notification: LocalNotification) {
    const id = uuidv4();
    notifications.push({id, ...notification});
    return of({id, ...notification});
  }

  updateNotification(notification: LocalNotification) {
    const index = notifications.findIndex(n => n.id === notification.id);
    notifications[index] = notification;
    return of(notification);
  }

}
