import { Injectable } from '@angular/core';
import { notifications } from '../../fixtures/notifications';
import { of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { LocalNotifications } from '@capacitor/local-notifications';
import { LocalNotificationsService } from './capacitor/local-notifications.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private readonly localNotificationsService: LocalNotificationsService) {}

  getNotifications() {
    return of(notifications);
  }

  addNotification(notification: LocalNotification) {
    const id = uuidv4();
    notifications.push({ id, ...notification });
    return of({ id, ...notification });
  }

  async updateNotification(notification: LocalNotification) {
    const index = notifications.findIndex((n) => n.id === notification.id);
    notifications[index] = notification;
    await this.localNotificationsService.schedule([
      {
        id: 1,
        title: 'Titulo',
        body: 'Cuerpo de la notificacion'
      }
    ])    
    return of(notification);
  }
}
