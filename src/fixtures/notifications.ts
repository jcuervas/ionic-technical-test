import {v4 as uuidv4} from 'uuid'

export const notifications: LocalNotification[] = [
  {
    id: uuidv4(),
    title: 'Notification 1',
    body: 'This is a notification',
    date: new Date(),
    status: 'unread'
  },
  {
    id: uuidv4(),
    title: 'Notification 2',
    body: 'This is another notification',
    date: new Date(),
    status: 'read'
  }
]
