const router = require("express").Router();
const { register } = require("./userauth");

router.route("/register").post(register);
router.route("/test").get(() => {
  console.log("test");
});

module.exports = router;
