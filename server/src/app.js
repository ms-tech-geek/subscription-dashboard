const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

const app = express();

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies to be sent
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/subscriptions', subscriptionRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Dashboard API');
});

module.exports = app;