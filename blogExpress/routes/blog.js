const express = require('express');
const router = express.Router();
const path = require('path');
const {routerAni}=require('./animals/animals')

router.get('/',(req, res,next) => {
    res.sendFile(path.join(__dirname, '../templates/index.html'));
    // next('route');
})

router.use('/blog', routerAni);

// router.get('/blog', (req, res) => {
//     // res.sendFile(path.join(__dirname, '../templates/blogs.html'));
//     res.write("<h1>hello</h1>");
// })
module.exports.router = router;