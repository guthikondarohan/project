const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Sample notifications data
let notifications = [
  { message: 'Notification 1' },
  { message: 'Notification 2' }
];

app.get('/api/notifications', (req, res) => {
  res.json(notifications);
});

const triggerEvent = (event) => {
  fetch('https://api.suprsend.com/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_SUPRSEND_API_KEY'
    },
    body: JSON.stringify(event)
  })
  .then(response => response.json())
  .then(data => console.log('Event sent to SuprSend:', data))
  .catch(error => console.error('Error sending event to SuprSend:', error));
};

// Example route to trigger event
app.post('/api/send-notification', (req, res) => {
  const newEvent = {
    recipient: 'user@example.com',
    message: 'You have a new notification',
    type: 'new_notification'
  };
  triggerEvent(newEvent);
  res.status(200).send('Notification sent!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
