const express = require("express");
const route = express.Router();


const { getProduct, postProduct, putProduct, deleteProduct } = require('../controller/controller')

route.get("/",getProduct);
route.post("/",postProduct);
route.put("/:id",putProduct);
route.delete("/:id", deleteProduct);

//can write above routes like the one below :
// router.route('/"').get(getPeople).post(createPerson);
// router.route('/:id"').put(updatePerson).delete(deletePerson);

module.exports = route;
