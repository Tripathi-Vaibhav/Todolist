
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

let date = new Date();
let curDay = date.getDay();
let day="";
switch (curDay) {
  case 0: day = "Sunday"; break;
  case 1: day = "Monday"; break;
  case 2: day = "Tuesday"; break;
  case 3: day = "Wednesday"; break;
  case 4: day = "Thrusday"; break;
  case 5: day = "Friday"; break;
  case 6: day = "Saturday"; break;
  default: day = "Some error occured"
}

app.get("/", function(req, res) {
  res.render("list", {Day: day});
});

app.listen(3000, function() {
  console.log("Server started to port 3000");
})
