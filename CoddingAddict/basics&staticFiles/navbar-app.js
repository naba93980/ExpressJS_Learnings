const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static('./public')); //--> for all routes

app.use("/contact", express.static("./public")); //--> only for /contact route

app.use("/course", express.static("./public"));

// put the index.html file in public folder and send all files using static function as shown above.

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/navbar-app/index.html")); // sendFile method sends any file
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/navbar-app/index.html"));
});

app.get("/contact", (req, res) => {
  // res.send("contact");
  res.sendFile(path.join(__dirname, "/navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("not found");
});

app.listen(5000, () => {
  console.log("server is listening at port 5000...");
});

//static asset are files that server doesnot have to change, like image file, css file
