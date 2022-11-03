const express = require("express");
const router = express.Router();
const regiterRouter = require("./register");
const cadastroRouter = require("./cadastros");

router.get("/", (req, res, next) => {
  res.send("online pasta api");
});

router.use("/register", regiterRouter);
router.use("/cadastros", cadastroRouter);

module.exports = router;
