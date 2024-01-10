import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notificacion } from '../notificacion.interface';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class NotificationItemComponent {
  @Input() notificacion!: Notificacion;
  @Output() notificacionClicked = new EventEmitter<Notificacion>();

  constructor() {}

  marcarComoLeida() {
    if (!this.notificacion.leido) {
      this.notificacion.leido = true;
      this.notificacionClicked.emit(this.notificacion);
    }
  }
}
