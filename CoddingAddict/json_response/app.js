const express = require('express');
const app = express();
const {products}=require('./data')

//sending json api

app.get('/', (req, res) => {
    res.send('<h1>home page</h1><a href="/api/products">products</a>');
})

app.get('/api/products', (req, res) => {

    // res.send(products);

    res.json(products.map((ele) => {
        const { id, name, price } = ele;
        return { id, name, price };
    }));    
})

app.listen(5000, () => {
    console.log( "listening at port 5000..." );
    
})