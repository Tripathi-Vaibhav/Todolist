// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = ["Breakfast", "Lunch", "Dinner"];
app.get("/", function(req, res) {

  let date = new Date();
  let options = {
    day: "numeric",
    weekday: "long",
    month: "long"
  };

  let day = date.toLocaleString("en-US", options);
  res.render("list", {Day: day, newListItem: items});
});

app.post("/", function(req, res) {
   let item = req.body.newItem;
   items.push(item);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started to port 3000");
});
