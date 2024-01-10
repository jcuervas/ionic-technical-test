import { Component } from '@angular/core';
import {IonicModule, ModalController} from '@ionic/angular';
import { CrearNotificacionModalComponent } from '../crear-notificacion-modal/crear-notificacion-modal.component';
import {FormsModule} from "@angular/forms"; // Asegúrate de cambiar la ruta

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class Tab2Page {
  constructor(private modalController: ModalController) {}

  async abrirModalCrearNotificacion() {
    const modal = await this.modalController.create({
      component: CrearNotificacionModalComponent
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      console.log('Notificación creada:', data);
      // Puedes hacer algo con los datos aquí, como guardarlos o mostrarlos
    }
  }
}
