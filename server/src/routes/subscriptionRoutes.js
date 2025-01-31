const express = require('express');
const SubscriptionController = require('../controllers/subscriptionController');

const router = express.Router();
const subscriptionController = new SubscriptionController();

router.post('/create-subscription', subscriptionController.createSubscription);
router.post('/webhook', subscriptionController.handleWebhook);

module.exports = router;