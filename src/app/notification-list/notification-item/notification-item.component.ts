import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-notification-item',
  standalone: true,
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class NotificationItemComponent {
  @Input() notification!: LocalNotification;
  @Output() read = new EventEmitter<void>();

  onClick(): void {
    this.read.emit();
  }
}
