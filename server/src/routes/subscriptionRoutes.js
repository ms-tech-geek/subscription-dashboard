const express = require('express');
const SubscriptionController = require('../controllers/subscriptionController');

const setRoutes = (app) => {
    const router = express.Router();
    const subscriptionController = new SubscriptionController();

    router.post('/create-subscription', subscriptionController.createSubscription);
    router.post('/webhook', subscriptionController.handleWebhook);

    app.use('/api/subscription', router);
};

module.exports = setRoutes;