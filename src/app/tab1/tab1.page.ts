import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalNotifications } from '@capacitor/local-notifications';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonBadge
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Notificacion } from 'src/app/notificacion.interface';
import { NotificacionesService } from 'src/app/notificaciones.service';
import {NotificationItemComponent} from "../notification-item/notification-item.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonItem, IonLabel, CommonModule, IonBadge, NotificationItemComponent],
})
export class Tab1Page implements OnInit {
  notificaciones: any[] = [];
  constructor(private notificacionesService: NotificacionesService) {}
  ngOnInit() {
    this.cargarNotificaciones();
  }

  ionViewDidEnter() {
    this.cargarNotificaciones();
  }

  cargarNotificaciones() {
    const notificacionesGuardadas = localStorage.getItem('notificaciones');
    if (notificacionesGuardadas) {
      this.notificaciones = JSON.parse(notificacionesGuardadas);
    } else {
      this.notificaciones = []; // Asegurarse de que la lista está vacía si no hay notificaciones guardadas
    }
  }


  async marcarComoLeida(notificacion: Notificacion) {
    notificacion.leido = true;
    localStorage.setItem('notificaciones', JSON.stringify(this.notificaciones));

    // Mostrando notificación local
    await LocalNotifications.schedule({
      notifications: [
        {
          title: `Has leído: ${notificacion.titulo}`,
          body: 'Notificación marcada como leída.',
          id: new Date().getTime(),
          actionTypeId: "",
          extra: null
        }
      ]
    });
  }
  manejarClickNotificacion(notificacion: Notificacion) {
    this.marcarComoLeida(notificacion);
  }
}
