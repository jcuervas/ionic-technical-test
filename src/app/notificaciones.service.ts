import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  private notificacionesSubject = new BehaviorSubject<any[]>(this.cargarNotificaciones());

  get notificaciones$() {
    return this.notificacionesSubject.asObservable();
  }

  private cargarNotificaciones() {
    return JSON.parse(localStorage.getItem('notificaciones') || '[]');
  }

  agregarNotificacion(notificacion: any) {
    const notificaciones = this.cargarNotificaciones();
    notificaciones.push(notificacion);
    localStorage.setItem('notificaciones', JSON.stringify(notificaciones));
    this.notificacionesSubject.next(notificaciones);
  }
}
