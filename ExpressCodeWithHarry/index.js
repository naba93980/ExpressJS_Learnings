const express = require('express')
const path = require('path');
// console.log(express);
const app = express();
// console.log(app);

function custommiddleware(req,res,next) {
    console.log(req); 
    next();
}
// app.use(custommiddleware);


app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello/:name', (req, res) => {
    console.log( req.params );    
    res.write(`<h1>hello ${req.params.name}</h1>`);
    res.end('<h4>bye</h4>', 'utf-8');    
})

app.get('/about/', (req, res) => {
    // res.write('<h1>about page</h1>');
    // res.end('<h4>bye from about</h4>', 'utf-8');
    res.json({
        "name": "nabajyoti",
        "year":"2018"
    })
})

app.get('/file/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.listen(8000, () => {
    console.log("listening at port 8000 ");
    
})

