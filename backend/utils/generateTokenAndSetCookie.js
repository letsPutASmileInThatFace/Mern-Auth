import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true, // prevent client side js from accessing the cookie (secures from XSS attack)
    secure: process.env.NODE_ENV === "production", //only true on production
    sameSite: "strict", //prevent an attack called csrf
    maxAge: 24 * 60 * 60 * 1000,
  });
  return token;
};
