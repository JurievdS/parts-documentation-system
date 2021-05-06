/**
 * @Route: url/api/auth
 * @Desc: Auth routes
 */
const Router = require("express").Router();
const auth = require("../../middleware/auth");
const { login, authToken } = require("../../controllers/authController");

Router.get("/test", (req, res) => {
  res.json({ msg: "Ping auth test route" });
});

Router.get("/", authToken);
Router.post("/login", login);

module.exports = Router;
