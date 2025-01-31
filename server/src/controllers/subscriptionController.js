const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

class SubscriptionController {
    async createSubscription(req, res) {
        try {
            const { email, plan } = req.body;

            const customer = await stripe.customers.create({
                email,
            });

            const priceId = plan === 'basic' ? 'price_basic' : 'price_premium';

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                customer: customer.id,
                line_items: [
                    {
                        price: priceId,
                        quantity: 1,
                    },
                ],
                mode: 'subscription',
                success_url: 'http://localhost:3000/success',
                cancel_url: 'http://localhost:3000/cancel',
            });

            res.json({ id: session.id });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async handleWebhook(req, res) {
        try {
            const event = req.body;
            // Process the event (e.g., subscription updates)
            res.status(200).send('Webhook received');
        } catch (error) {
            res.status(400).send('Webhook error');
        }
    }
}

module.exports = SubscriptionController;