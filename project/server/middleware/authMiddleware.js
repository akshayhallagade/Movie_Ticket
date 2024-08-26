const jwt = require("jsonwebtoken");

module.exports = function (req, res) {
  const token = req.headers.authorization.split(" ")[1];
  const verifiedToken = jwt.verify(token, `${process.env.SECRET_KEY}`);
  console.log(verifiedToken);
  res.send({ status: true, message: "user login successfull" });
};
