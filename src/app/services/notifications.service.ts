import {Injectable} from '@angular/core';
import {notifications} from '../../fixtures/notifications';
import {Observable, of} from 'rxjs';
import {v4 as uuidv4} from 'uuid'
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private notifications: any;

  constructor() {
  }

  
  getNotifications() {
   

    const notificationsObservable = new Observable<LocalNotification[]>((observer) => {
      Preferences.get({ key: 'notifications' }).then((result) => {
        if (result.value != null) {
          this.notifications = JSON.parse(result.value);
          console.log("notifications", this.notifications);
          observer.next(this.notifications);
        } else {
          console.log("notifications", this.notifications);
          observer.next(this.notifications);
        }
        observer.complete();
      });
    });
    
    
    return notificationsObservable;
  }

  async addNotification(notification: LocalNotification) {
    const id = uuidv4();
    this.notifications.push({id, ...notification});
    await Preferences.set({ key: 'notifications', value: JSON.stringify(this.notifications) })
    return of({id, ...notification});
  }

  updateNotification(notification: LocalNotification) {
    const index = notifications.findIndex(n => n.id === notification.id);
    notifications[index] = notification;
    return of(notification);
  }

}
