import mongoose, { Schema } from 'mongoose';

const tokenSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    refreshToken: {type: String, required: true},
});

export const tokenModel = mongoose.model('Token', tokenSchema);