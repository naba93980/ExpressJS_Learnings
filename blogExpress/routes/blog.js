const express = require('express');
const router = express.Router();
const path = require('path');
const { routerLang } = require('./langs/langs')
const { routerct }=require('./codingthunder')


router.get('/',(req, res,next) => {
    // res.sendFile(path.join(__dirname, '../templates/index.html'));
    // next('route');
    res.render('home');
})
router.use('/codingthunder', routerct);

router.use('/blog', routerLang);

// router.get('/blog', (req, res) => {
//     // res.sendFile(path.join(__dirname, '../templates/blogs.html'));
//     res.write("<h1>hello</h1>");
// })

module.exports.router = router;