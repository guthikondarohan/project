const fetch = require('node-fetch');

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

// Example event
const newEvent = {
  recipient: 'user@example.com',
  message: 'You have a new notification',
  type: 'new_notification'
};

triggerEvent(newEvent);
