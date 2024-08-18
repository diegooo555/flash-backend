import jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
/*   req.user = {
    id: "66860e95a4bec9750e19c9ac",
    name: "Diego555",
    email: "alfa@gmail.com",
  }
  next(); */
  const { token } = req.cookies;
  if (!token)
    return res.status(401).json({ message: "Not token, autorization denied" });
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err)return res.status(401).json({message: "Invalid Token"});
    req.user = user;
    next();
  });
};
