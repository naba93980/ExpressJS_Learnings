const express = require('express');
const app = express();
const {products}=require('./data')


//console.log(this); //module.exports object

app.get('/', (req, res) => {
    res.send('<h1>home page</h1><a href="/api/products">products</a>');
})


//route parameter
app.get('/api/products/:id', (req, res) => { 
    
    //console.log( this); //module.exports object - closure concept

    const productData = products.find((ele) => ele.id === parseInt(req.params.id));
    if (!productData)
        res.status(400).send("Not found");
    else
    res.json(productData);    
})



app.listen(5000, () => {
    console.log( "listening at port 5000..." );
    
})

// module.exports.products = products;
// console.log(this); //module.exports object