
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

let date = new Date();

let options = {
  day: "numeric",
  weekday: "long",
  month: "long"
}

let day = date.toLocaleString("en-US", options);
app.get("/", function(req, res) {
  res.render("list", {Day: day});
});

app.listen(3000, function() {
  console.log("Server started to port 3000");
})
