import {Component} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { NotificationsService } from '../services/notifications.service';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Toast } from '@capacitor/toast';
import { LoadingController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-create-notification',
  templateUrl: 'create-notification.page.html',
  styleUrls: ['create-notification.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule]
})
export class CreateNotificationPage {

  form: FormGroup;

  /**
   * Loading del estado para el botón, para no deje enviar más de una vez la misma notificación
   */
  public isLoading: boolean = false;

  constructor(
    private notificationsService: NotificationsService,
    private loadingCtrl: LoadingController
  ) {

    this.form = new FormGroup({
      title: new FormControl('', 
        {validators: [Validators.required]}
      ),
      body: new FormControl('', 
        {validators: [Validators.required]}
      )
    });
  }

  createNotification() {
    this.loadingCtrl.create({
      message: "Creando notificación",
    }).then(()=>{
      this.isLoading = true;

      let localNotification: LocalNotification = {
        title: this.form.get("title")?.value ,
        body: this.form.get("body")?.value,
        date: new Date(),
        status: 'unread'
      }
      setTimeout(() => {
        this.notificationsService.addNotification(localNotification);
  
        this.form.reset();
    
        Toast.show({text: "Notificación creada"});

        this.isLoading = false;
      }, 2000);
      
    })
    
  }

}
