let { products } = require("../data");

const getProduct = (req, res) => {
  res.status(200).json({ data: products });
};

const postProduct = (req, res) => {
  products.push(req.body);
  console.log(req.body);
  console.log(products);
  res.sendStatus(200);
};

const putProduct = (req, res) => {
  products.find((ele) => {
    if (ele.id === +req.params.id) {
      const { name, image, price, desc } = req.body;
      ele.name = name;
      ele.image = image;
      ele.price = price;
      ele.desc = desc;
    }
  });
  console.log(products);
  res.sendStatus(200);
};

const deleteProduct = (req, res) => {
  products = products.filter((ele) => ele.id !== +req.params.id);
  res.sendStatus(200);
};

module.exports.getProduct = getProduct;
module.exports.postProduct = postProduct;
module.exports.putProduct = putProduct;
module.exports.deleteProduct = deleteProduct;
