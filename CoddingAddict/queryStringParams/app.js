const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>home page</h1><a href="/api/products">products</a>');
    console.log( req );
})


//route parameter
app.get('/api/products/:id', (req, res) => { 

    const productData = products.find((ele) => ele.id === parseInt(req.params.id));
    if (!productData)
        res.status(400).send("Not found");
    else
    res.json(productData);    
})


//query parameter
app.get('/api/v1/query', (req, res) => {
    
    const { search, limit, price } = req.query;
    
    let sortedProducts = [...products]; //closure magic 

    if (search) {
        sortedProducts = sortedProducts.filter((ele) => ele.name.startsWith(search)); 
    }
    if (price) {
        sortedProducts = sortedProducts.filter((ele) => ele.price<price);
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, parseInt(limit));
    }
    if (sortedProducts.length < 1) 
        res.status(200).send("no match found");
    else
        res.json(sortedProducts); 
})

app.listen(5000, () => {
    console.log( "listening at port 5000..." );   
})


