import { Injectable } from '@angular/core';
import { PreferencesDatabaseService } from './capacitor/preferences-database.service';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private readonly preferenceDatabase: PreferencesDatabaseService) {}

  async save(notification: LocalNotification): Promise<void> {
    const notifications = await this.preferenceDatabase.get('notifications');
    const parsedNotifications = notifications ? JSON.parse(notifications) : [];
    await this.preferenceDatabase.set({ key: 'notifications', value: JSON.stringify([...parsedNotifications, notification])})
  }

  async getAll(): Promise<LocalNotification[]> {
    const notifications = await this.preferenceDatabase.get('notifications');
    return notifications ? JSON.parse(notifications) : [];
  }
}
