const express = require('express');
const app = express();
let { products } = require('./data');

// app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get('/api/products', (req, res) => {
    res.status(200).json({ data: products });
})

app.post('/api/products', (req, res) => {
    products.push(req.body);
    console.log(req.body);
    console.log(products);
    res.sendStatus(200);
});

app.put('/api/products', (req, res) => {
    products.find((ele) => {
        if (ele.id === req.body.id) {
            const { name, image, price, desc } = req.body;
            ele.name = name;
            ele.image = image;
            ele.price = price;
            ele.desc = desc;
        }
    })
    console.log(products);
    res.sendStatus(200);

});

app.listen(5000);