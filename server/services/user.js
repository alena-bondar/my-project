import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { userModel } from '../models/index.js';
import { mailService, tokenService } from './index.js'
import { UserDto } from "../dto/user-dto.js";

export const registration = async (email, password) => {
        const user = await userModel.findOne({ email });
        if (user) {
            throw new Error('User with this email already exists')
        }
        const activationLink = uuidv4();
        const hashPassword = await bcrypt.hash(password, 3);
        const createUser = await userModel.create({email, password: hashPassword, activationLink});
        await mailService.sendActivationMail(email, activationLink);
        const userDto = new UserDto(createUser);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
};