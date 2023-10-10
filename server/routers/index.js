import { Router } from 'express';
import { body } from "express-validator";
import {userController} from "../controllers/index.js";
import {authMiddleware} from "../middlewares/auth-middleware.js";

export const router = new Router;

router.post('/registration',
    body('email').isEmail(), userController.create);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);