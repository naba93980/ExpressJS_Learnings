const createapp = require('express')
const path = require('path');
// console.log(createapp);
const app = createapp();
// console.log(  app );
app.get('/', (req, res) => {
    res.write('<h1>helloworld</h1>');
    res.end('<h4>bye</h4>', 'utf-8');
    
})
app.get('/about/', (req, res) => {
    res.write('<h1>about page</h1>');
    res.end('<h4>bye from about</h4>', 'utf-8');
})
app.get('/file/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.listen(8000, () => {
    console.log("listening at port 8000 ");
    
})

