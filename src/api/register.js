const express = require("express");
const router = express.Router();
const { user } = require("../models");
const { body, validationResult } = require("express-validator");

const ResgisterService = require("../services/registros");

const register = new ResgisterService(user);

router.post(
  "/",
  body("name").not().isEmpty().trim().escape(),
  body("email").isEmail(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email } = req.body;
    try {
      await register.post({ name, email });
      res.status(201).send("user add sucessfully to database");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const users = await register.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send("ERROR: verify conection database");
  }
});
module.exports = router;
