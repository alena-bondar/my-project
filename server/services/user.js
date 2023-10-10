import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { userModel } from '../models/index.js';
import { mailService, tokenService } from './index.js'
import { UserDto } from "../dto/user-dto.js";
import { ApiError} from "../utils/errors.js";
import {findToken} from "./token.js";

export const registration = async (email, password) => {
        const user = await userModel.findOne({ email });
        if (user) {
            throw ApiError.BadRequest('User with this email already exists')
        }
        const activationLink = uuidv4();
        const hashPassword = await bcrypt.hash(password, 3);
        const createUser = await userModel.create({email, password: hashPassword, activationLink});
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
        const userDto = new UserDto(createUser);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
};

export const activate = async (activationLink) => {
        const user = await userModel.findOne({activationLink});
        if (!user) {
           throw ApiError.BadRequest("Link is not correct");
        }
        user.isActivated = true;
        await user.save();
}

export const login = async (email, password) => {
        const user = await userModel.findOne({email});
        if (!user) {
                throw ApiError.BadRequest("User with this email not found");
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
                throw ApiError.BadRequest("This password is not correct");
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
}

export const logout = async (refreshToken) => {
        return await tokenService.removeToken(refreshToken);
}

export const refresh = async (refreshToken) => {
        if(!refreshToken) {
                throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
                throw ApiError.UnauthorizedError();
        }

        const user = await userModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
}

export const getAllUsers = async () => {
        const users = await userModel.find();
        return users;
}