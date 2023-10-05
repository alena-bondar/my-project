import { userService, mailService, tokenService } from '../services/index.js'

export const create = async (req, res, next) => {
    try {
      const {email, password} = req.body;
      const userData = await userService.registration(email, password);
      return res.json(userData)
    } catch (e) {
        console.log(e);
    }
}

export const login = (req, res, next) => {
    try {

    } catch (e) {
        console.log(e);
    }
}

export const logout = (req, res, next) => {
    try {

    } catch (e) {
        console.log(e);
    }
}

export const refresh = (req, res, next) => {
    try {

    } catch (e) {
        console.log(e);
    }
}

export const activate = (req, res, next) => {
    try {

    } catch (e) {
        console.log(e);
    }
}

export const getUsers = (req, res, next) => {
    try {
      res.json(['test123'])
    } catch (e) {
        console.log(e);
    }
}
