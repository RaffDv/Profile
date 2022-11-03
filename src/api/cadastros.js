const express = require("express");
const router = express.Router();

let users = ["raff", "raff@gmail.com"];

router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;
