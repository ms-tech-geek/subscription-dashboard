# Subscription Dashboard

This project is a subscription dashboard built using React for the client-side and Node.js for the server-side, integrated with the Stripe API for payment processing.

## Project Structure

```
subscription-dashboard
├── client                # Client-side React application
│   ├── public
│   │   └── index.html    # Main HTML file for the React app
│   ├── src
│   │   ├── components
│   │   │   └── SubscriptionForm.js  # Subscription form component
│   │   ├── App.js        # Main App component
│   │   ├── index.js      # Entry point for the React application
│   │   └── styles.css     # CSS styles for the application
│   ├── package.json      # Client-side dependencies and scripts
│   └── README.md         # Documentation for the client-side application
├── server                # Server-side Node.js application
│   ├── src
│   │   ├── controllers
│   │   │   └── subscriptionController.js  # Handles subscription logic
│   │   ├── routes
│   │   │   └── subscriptionRoutes.js      # API routes for subscriptions
│   │   ├── app.js       # Initializes the Express application
│   │   └── server.js    # Entry point for the server-side application
│   ├── package.json      # Server-side dependencies and scripts
│   └── README.md         # Documentation for the server-side application
├── .gitignore            # Files and directories to ignore by Git
└── README.md             # General documentation for the entire project
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A Stripe account to manage subscriptions.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd subscription-dashboard
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd server
   npm install
   ```

### Running the Application

1. Start the server:
   ```
   cd server
   node src/server.js
   ```

2. Start the client:
   ```
   cd client
   npm start
   ```

### Usage

- Navigate to `http://localhost:3000` to access the subscription dashboard.
- Use the subscription form to create and manage subscriptions through Stripe.

## License

This project is licensed under the MIT License.