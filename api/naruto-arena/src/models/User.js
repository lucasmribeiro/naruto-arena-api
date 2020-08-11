const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },    
    createdAt: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

mongoose.model('User', UserSchema);