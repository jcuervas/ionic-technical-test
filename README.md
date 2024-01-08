# LOCAL NOTIFICATIONS TECHNICAL TEST
Welcome to the technical test for the position of Frontend Developer at Alten. In this test we would like to 
see your skills in the following areas:

- Write organized and clean code
- Show your knowledge of the framework
- Show us your ability to solve problems
- Test your code

## The test
This application is a simple notification system, but it has many stuff to do. You will see 3 tabs in the tab-bar:
- First tab: List of notifications
- Second tab: Create a notification
- Third tab: Settings

### First tab: List of notifications
This tab shows a list of notifications. Each notification has a title, a body and a date. The notifications can be read or unread.
Unread notifications are shown in bold and a little badge is visible to the left.

> #### Work to do
> When you click on a notification, it should become read and both the bold style and the badge should be removed.
> Add capacitor local notifications plugin to the project and show a notification when a notification is clicked.

> Optional: Extract the notification item in a component.

### Second tab: Create a notification
This tab allows you to create a notification. You can write a title and a body.

> #### Work to do
> When you click on the button, the notification is created and you are redirected to the first tab.
Date of the notification should be the current moment and a unique id should be generated. The notification should be unread.
To simulate a loading state, wrap the creation function in a promise and add a delay of 2 seconds. Button should show a loading state during this time.

> Optional: Add a validation to the form. Both fields are required.

> Optional: Improve the UI of the form, feel free to show us your skills.

### Improvements
Current notifications are stored in a project fixture. We would like to store them in a database. We would like to use the capacitor storage plugin to store them in the device.
