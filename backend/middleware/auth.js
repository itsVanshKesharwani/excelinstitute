const jwt = require("jsonwebtoken");

function check(role) {
  return (req, res, next) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Login required" });
    }
    try {
      const data = jwt.verify(header.split(" ")[1], process.env.JWT_SECRET);
      if (data.role !== role) {
        return res.status(403).json({ message: "Not allowed" });
      }
      req.user = data;
      next();
    } catch (err) {
      res.status(401).json({ message: "Session expired, login again" });
    }
  };
}

module.exports = {
  userAuth: check("user"),
  adminAuth: check("admin"),
};
