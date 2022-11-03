const express = require("express");
const router = express.Router();
const { user } = require("../models");
const ResgisterService = require("../services/registros");

const register = new ResgisterService(user);

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  try {
    await register.post({ name, email });
    res.status(201).send("user add sucessfully to database");
  } catch (error) {
    res.status(400).send("ERROR: user not add to database");
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await register.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send("ERROR: verify conection database");
  }
});
module.exports = router;
