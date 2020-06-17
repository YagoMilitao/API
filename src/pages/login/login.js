const mongoose = require('../../database/conexao');
const bcrypt = require('bcrypt');

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    nickname: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

LoginSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const Login = mongoose.model('Login', LoginSchema);

module.exports = Login;