const express = require('express');
const app = express();

let notifications = [
  { message: 'Notification 1' },
  { message: 'Notification 2' }
];

app.get('/api/notifications', (req, res) => {
  res.json(notifications);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
