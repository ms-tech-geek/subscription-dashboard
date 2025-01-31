# Subscription Dashboard Server

This is the server-side application for the Subscription Dashboard project, built using Node.js and Express. It handles subscription management and integrates with the Stripe API for payment processing.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   git clone https://github.com/yourusername/subscription-dashboard.git

2. Navigate to the server directory:

   cd subscription-dashboard/server

3. Install the dependencies:

   npm install

### Running the Server

To start the server, run the following command:

npm start

The server will start on the specified port (default is 5000). You can change the port in the `server/src/app.js` file.

### API Endpoints

- `POST /api/subscription`: Create a new subscription.
- `GET /api/subscription/:id`: Retrieve subscription details.
- `POST /api/webhook`: Handle Stripe webhooks.

### Environment Variables

Make sure to set the following environment variables in a `.env` file:

- `STRIPE_SECRET_KEY`: Your Stripe secret key.
- `PORT`: (Optional) The port on which the server will run.

### Testing

To run tests, use the following command:

npm test

### License

This project is licensed under the MIT License. See the LICENSE file for details.