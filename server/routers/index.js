import { Router } from 'express';
import {userController} from "../controllers/index.js";

export const router = new Router;

router.post('/registration', userController.create);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);