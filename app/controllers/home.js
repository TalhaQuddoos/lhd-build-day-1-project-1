const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  res.render("home/index");
});

router.get("/country/:country_name", function(req, res) {
  country = req.params['country_name']
  console.log(country)
  res.render("home/charts", {
    'country': country
  });
});
module.exports = router;
