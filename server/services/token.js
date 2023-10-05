import jwt from 'jsonwebtoken';
import {userModel} from "../models/index.js";

export const generateTokens = (payload) => {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'});
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '15d'})
    return {
        accessToken,
        refreshToken
    }
}
export const saveToken = async (userId, refreshToken) => {
  const tokenData = await userModel.findOne({ user: userId });
  if(refreshToken) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
  }
    return await userModel.create({user: userId, refreshToken});
}
