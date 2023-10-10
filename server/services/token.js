import jwt from 'jsonwebtoken';
import {tokenModel} from "../models/index.js";

export const generateTokens = (payload) => {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'});
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '15d'})
    return {
        accessToken,
        refreshToken
    }
}
export const saveToken = async (userId, refreshToken) => {
  const tokenData = await tokenModel.findOne({ user: userId });
  if(tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
  }
    return await tokenModel.create({user: userId, refreshToken});
}

export const removeToken = async (refreshToken) => {
    const tokenData = await tokenModel.deleteOne({refreshToken});
    return tokenData;
}

export const validateAccessToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    } catch (e) {
        return null;
    }
}

export const validateRefreshToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    } catch (e) {
        return null;
    }
}

export const findToken = async (refreshToken) => {
    const tokenData = await tokenModel.findOne({refreshToken});
    return tokenData;
}