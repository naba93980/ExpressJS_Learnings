const express = require('express');
const app = express();
const routerct = express.Router()


routerct.get('/', (req, res) => {
    res.render('codingthunder', {
        showTitle: true,
        author: true,
        firstName: "Yehuda",
        lastName: "Katz",
        people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley",
  ],
    })
})
module.exports.routerct = routerct;