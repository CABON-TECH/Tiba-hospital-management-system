const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    role : { type: String, enum: ['admin', 'patient', 'doctor'], required: 'true' },
    }
);

const User = moongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);