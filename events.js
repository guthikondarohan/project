const EventEmitter = require('events');
const axios = require('axios');

class NotificationEmitter extends EventEmitter {}
const notificationEmitter = new NotificationEmitter();
notificationEmitter.on('newNotification', (notification) => {
  axios.post('https://api.suprsend.com/send', notification, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer YOUR_SUPRSEND_API_KEY`
    }
  })
    .then(response => console.log('Notification sent:', response.data))
    .catch(error => console.error('Error sending notification:', error));
});
const triggerNotification = (message) => {
  const notification = {
    notification: {
      title: 'New Notification',
      body: message
    },
    recipients: ['recipient@example.com'] 
  };
  notificationEmitter.emit('newNotification', notification);
};

module.exports = { triggerNotification };
