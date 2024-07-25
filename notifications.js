const express = require('express');
const router = express.Router();
const { triggerNotification } = require('../events');
router.post('/', (req, res) => {
  const { message } = req.body;
  triggerNotification(message);
  res.status(201).send({ message: 'Notification triggered' });
});

router.get('/', (req, res) => {
  const notifications = [
    { id: 1, message: 'Notification 1' },
    { id: 2, message: 'Notification 2' }
  ];
  res.send(notifications);
});

module.exports = router;
