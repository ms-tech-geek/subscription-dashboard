import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [plan, setPlan] = useState('basic');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const stripe = await stripePromise;

            const response = await fetch('http://localhost:8080/api/subscriptions/create-subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, plan }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const session = await response.json();

            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                console.error(result.error.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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