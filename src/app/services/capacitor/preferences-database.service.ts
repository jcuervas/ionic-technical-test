import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

export interface PreferencesObject {
  key: string;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class PreferencesDatabaseService {

  async set(data: PreferencesObject): Promise<void> {
    const { key, value } = data;
    await Preferences.set({
      key,
      value
    })
  }

  async get(key: string): Promise<string | null> {
      const data = await Preferences.get({ key });
      return data.value;    
  }
}
