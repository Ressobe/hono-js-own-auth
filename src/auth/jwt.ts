import * as jwt from "jsonwebtoken";

export function generateAccessToken(userId: string) {
  const token = jwt.sign(
    {
      userId,
    },
    process.env.ACCESS_TOKEN_SECRET!,
    {
      expiresIn: "15s",
    },
  );
  return token;
}

export function generateRefreshToken(userId: string) {
  const token = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET!);
  return token;
}
