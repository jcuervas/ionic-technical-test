import {Component} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { NotificationsService } from '../services/notifications.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-create-notification',
  templateUrl: 'create-notification.page.html',
  styleUrls: ['create-notification.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule]
})
export class CreateNotificationPage {
  form: FormGroup;
  isLoading = false;
  constructor(private readonly fb: FormBuilder, private readonly notificationsService: NotificationsService, private readonly router: Router) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]]
    })
  }

  createNotification() {
    this.isLoading = true;
    const { title, body } = this.form.value;
    const notification: LocalNotification = {
      title,
      body,
      date: new Date(),
      status: 'unread'
    }
    this.notificationsService.addNotification(notification).pipe(
      delay(2000)
    ).subscribe({
      next: () => {
        this.router.navigate(['/notifications-list'])
      },
      error: (err) => {
        console.error('Error creating notification: ', { err })
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

}
