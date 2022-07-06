const express = require('express');
const routerSlug = express.Router();
const path = require('path');
const blogdata = require('../../../data/blogdata')

routerSlug.get('/', (req, res,next) => {
    console.log("logged in /blog/");
    next('route');    
})
routerSlug.get('/:slug', (req, res) => {
    var lang = blogdata.filter((e) => {
        return e.lang == req.params.slug        
    })
    res.write(`<h1>this is ${lang[0].author} language`);
    res.end();
})

module.exports.routerSlug = routerSlug;