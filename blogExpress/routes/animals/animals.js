const express = require('express');
const app = express();
const routerAni = express.Router();
const blogdata = require('../../data/blogdata')
const path = require('path');

routerAni.get('/', (req, res) => {
    // res.json(blogdata);
    res.sendFile(path.join(__dirname, '../../templates/animals.html'));
    console.log(req.url);
})
module.exports.routerAni = routerAni;