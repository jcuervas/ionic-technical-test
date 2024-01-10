import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule } from "@angular/forms";
import { NotificacionesService } from '../notificaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-notificacion-modal',
  templateUrl: './crear-notificacion-modal.component.html',
  styleUrls: ['./crear-notificacion-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class CrearNotificacionModalComponent {
  tituloNotificacion: string = '';
  cuerpoNotificacion: string = '';
  cargando: boolean = false;

  constructor(private modalController: ModalController, private notificacionesService: NotificacionesService, private router: Router) {}

  crearNotificacion() {
    if (!this.tituloNotificacion || !this.cuerpoNotificacion) {
      return;
    }

    this.cargando = true;

    setTimeout(() => {
      const nuevaNotificacion = {
        id: Math.random().toString(36).substr(2, 9), // Generación de ID
        titulo: this.tituloNotificacion,
        cuerpo: this.cuerpoNotificacion,
        fecha: new Date(),
        leido: false
      };

      // Guardando la notificación
      this.notificacionesService.agregarNotificacion(nuevaNotificacion);

      this.cargando = false; // Desactivar el estado de carga
      this.router.navigateByUrl('/tabs/tab1'); // Navegar a la primera pestaña
      this.modalController.dismiss(nuevaNotificacion);
    }, 2000);
  }
}
