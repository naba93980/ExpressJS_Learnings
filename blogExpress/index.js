const express = require('express');
const path = require('path');
const app = express();
const {router}=require('./routes/blog.js')
const port = 8000;

app.use('/', router);

app.listen(port, () => {
    console.log(`listening at port ${port}`);    
})
