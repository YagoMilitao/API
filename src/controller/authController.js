const express = require('express');
const bcrypt = require('bcrypt');
const Login = require('../pages/login/login');

const router = express.Router();

router.post('/register', async(req, res) =>{
    const { email } = req.body;
    try{
        if (await Login.findOne({ email }))
            return res.status(400).send({ error: 'Login ja existente'});
        
            const login= await Login.create(req.body);

            user.password = undefined;

        return res.send({ login });
    } catch(err){
        return res.status(400).send({ error: 'Falha no registro' });
    }
});

router.post('/authenticate', async (req,res) =>{
    const { email, password } = req.body;

    const login = await User.findOnde({ email }).select('+password');

    if(!user){
        return res.status(400).send({ error: 'User not found'});
    }
    if (!await bcrypt.compare(password, user.password)){
        return res.status(400).send({ error: 'Invalid password'});
        
        res.send({ login });
    }
});

module.exports = app => app.use('/auth', router);