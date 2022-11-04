const express = require("express");
const router = express.Router();
const { user } = require("../models");
const ResgisterService = require("../services/registros");
const register = new ResgisterService(user);

router.get("/", async (req, res) => {
  try {
    const users = await register.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send("ERROR: verify conection database");
  }
});

module.exports = router;
