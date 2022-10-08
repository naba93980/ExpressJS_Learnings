const express = require('express');
const app = express();
let products = require('./routes/products.js')


// parse form data for all routes
app.use(express.urlencoded({ extended: false }));

// parse json data for all routes
app.use(express.json());

app.use('/api/products', products)

app.listen(5000);