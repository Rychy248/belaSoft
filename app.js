//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require('mongoose');


const app = express();

app.set('view engine', 'ejs');

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());

app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});

// const articleSchema = {
//   title: String,
//   content: String
// };

// const Article = mongoose.model("Article", articleSchema);

///////////////////////////////////Requests Targetting all Articles////////////////////////

app.route("/articles")

.get(function(req, res){

  res.json(
    {
    "data":"HEllo World",
    "product":{a:"asdf",b:"asdf"}
  })
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
