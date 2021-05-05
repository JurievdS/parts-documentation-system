const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/config");

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_KEY, {
    epiresIn: "30d",
  });
};

module.exports = generateToken;
