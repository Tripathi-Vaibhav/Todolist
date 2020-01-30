//jshint esversion: 6

module.exports.getDate = getDate;

function getDate() {
  let date = new Date();
  let options = {
    day: "numeric",
    weekday: "long",
    month: "long"
  };

  let day = date.toLocaleString("en-US", options);

  return day;
}
