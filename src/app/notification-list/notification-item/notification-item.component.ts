import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  standalone: true,
  styleUrls: ['./notification-item.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class NotificationItemComponent  implements OnInit {
  @Input() notification!: LocalNotification;

  constructor() { }

  ngOnInit() {}

}
