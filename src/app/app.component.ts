import {Component} from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import {IonApp, IonRouterOutlet} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
  }

  ngOnInit():void {
    LocalNotifications.requestPermissions().then((status: any)=>{
      console.log("status", status);
    });
  }
}
