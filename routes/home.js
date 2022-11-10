const express = require("express");
const router = express.Router();

// Array of elements
const elements = require("../data/periodicTableElements");

router.get("/", (req, res, next) =>
  res.render("periodicTable", { layout: false, elements })
);

module.exports = router;
