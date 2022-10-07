const express = require("express");
const app = express();
const { logger } = require("./logger");
const { authorize } = require('./authorize');

// req  => middleware => res

// app.get("/", logger, (req, res) => {
//     res.send("Home");
// });
// app.get("/about", logger, (req, res) => {
//     res.send("about");
// });

app.use([authorize,logger]); //runs the middleware 'logger' and 'authorize' for each url

// app.use('/api', logger); //runs the middleware 'logger' for each url having '/api'

// we can also put middleware functions in the route simultaneously, so that they will run only when that route is hit 

app.get("/", (req, res) => {
    res.send(`Home ${req.user.name}`);
});

app.get("/about", (req, res) => {
    res.send("about");
});

app.get("/api/items", (req, res) => {
    res.send("about");
});

app.get("/api/products", (req, res) => {
    res.send("about");
});

app.listen(5000, () => {
    console.log("Listening at port 5000");
});

// middleware functions can be of 3 types :
// user defined - logger(), authenticate()
// inbuilt - express.static()
// third party libraries