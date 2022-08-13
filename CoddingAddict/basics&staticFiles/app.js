const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("<h1>hi</h1>"); // send method sends any string
})

app.get('/about', (req, res) => {
    res.send("About page");
})

app.all('*',(req,res)=> {
    res.status(404).send("not found");
})


app.listen(5000, () => {
    console.log( "server is listening at port 5000..." );
    
})






// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen


//https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/