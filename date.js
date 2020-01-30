//jshint esversion: 6

exports.getDate = function() {

  let date = new Date();
  let options = {
    day: "numeric",
    weekday: "long",
    month: "long"
  };

return date.toLocaleString("en-US", options);
};
