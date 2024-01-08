import {Component} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-notification',
  templateUrl: 'create-notification.page.html',
  styleUrls: ['create-notification.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule]
})
export class CreateNotificationPage {

  constructor() {}

  createNotification() {

  }

}
