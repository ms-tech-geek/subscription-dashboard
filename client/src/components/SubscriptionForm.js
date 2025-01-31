import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [plan, setPlan] = useState('basic');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const stripe = await stripePromise;

        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, plan }),
        });

        const sessionId = await response.json();
        const result = await stripe.redirectToCheckout({ sessionId });

        if (result.error) {
            console.error(result.error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Subscribe to our service</h2>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Plan:
                <select value={plan} onChange={(e) => setPlan(e.target.value)}>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                </select>
            </label>
            <button type="submit">Subscribe</button>
        </form>
    );
};

export default SubscriptionForm;