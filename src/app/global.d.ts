export {}

declare global {

  type NotificationStatus = 'read' | 'unread'

  type LocalNotification = {
    id?: string;
    title: string;
    body: string;
    data?: any;
    date: Date;
    status: NotificationStatus;
  };
}
