import mongoose, {Schema, model} from 'mongoose';

const userSchema = new Schema({
    email: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String}
});

export const userModel = mongoose.model('User', userSchema);