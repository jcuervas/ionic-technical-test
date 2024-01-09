import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],

})


export class NotificationItemComponent  implements OnInit {

  @Input()
  notification!: LocalNotification;

  @Output() readNotification = new EventEmitter<LocalNotification>();

  constructor() { }

  ngOnInit() {}

  public readNotificationItem(){
    this.readNotification.emit(this.notification);
  }

}
