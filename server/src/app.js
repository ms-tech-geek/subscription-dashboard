const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/subscriptions', subscriptionRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Dashboard API');
});

module.exports = app;