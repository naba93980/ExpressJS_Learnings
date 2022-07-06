const express = require('express');
const app = express();
const routerLang = express.Router();
const blogdata = require('../../data/blogdata')
const path = require('path');
const {routerSlug}=require('./slug/slug')

routerLang.use('/', routerSlug);


routerLang.get('/', (req, res) => {
    // res.json(blogdata);
    res.sendFile(path.join(__dirname, '../../templates/animals.html'));
    console.log(req.url);
})


module.exports.routerLang = routerLang;