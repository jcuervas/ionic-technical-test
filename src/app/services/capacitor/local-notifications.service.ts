import { Injectable } from '@angular/core';
import { LocalNotifications, LocalNotificationSchema } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root',
})
export class LocalNotificationsService {
  constructor() {
    this.checkIfHasPermissions();
  }

  async schedule(notifications: LocalNotificationSchema[]): Promise<void> {
    try {
        await LocalNotifications.schedule({
          notifications
        });      
      } catch (error) {
        console.log('error', error);
        
      }
  }

  private async checkIfHasPermissions(): Promise<void> {
    const { display } = await LocalNotifications.checkPermissions();
    if(display !== 'granted') {
      await LocalNotifications.requestPermissions();
    }
  }
}
