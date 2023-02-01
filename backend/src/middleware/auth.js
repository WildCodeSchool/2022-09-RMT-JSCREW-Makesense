const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(
      req.cookies.access_token,
      process.env.JWT_AUTH_SECRET,
      (err, decode) => {
        if (err) {
          res.sendStatus(401);
        } else {
          req.auth = decode;
          next();
        }
      }
    );
  } else {
    res.sendStatus(401);
  }
};

const checkEmail = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(
      req.cookies.access_token,
      process.env.JWT_AUTH_SECRET,
      (err, decode) => {
        const tokenData = decode;
        if (err) {
          res.sendStatus(401);
        } else if (tokenData.email === req.body.email) {
          next();
        } else {
          res.sendStatus(401);
        }
      }
    );
  } else {
    res.sendStatus(401);
  }
};

module.exports = { checkAuth, checkEmail };
