const JWT = require('jsonwebtoken');
const User = require('../models/user');
const {JWT_SECRET} = require('../configuration');
const userCtrl = {};

signToken = user => {
    return JWT.sign({
        iss : 'JorgeLuis',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate()+1)
    }, JWT_SECRET);
}


userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.profile = async (req, res) => {
    
    //const user = await User.findById(req.user.id);
    //console.log(user);
    res.json(req.user);
}

userCtrl.signIn = async (req, res) => {

    //generate token
    const token = signToken(req.user);
    res.status(200).json({token});
}

userCtrl.signUp = async (req, res) => {
    
    const {firstName,lastName,email,password} = req.body;
    const foundUser = await User.findOne({email});

    //Check if there is a user with the same email 
    if(foundUser){
        return res.status(403).json({error: 'Email is already  in use'});
    }

    //save user
    const newUser = new User({firstName,lastName,email});
    newUser.password = newUser.encryptPassword(password);
    await newUser.save();

    //generate token
    const token = signToken(newUser);

    //respond with token
    res.status(200).json({token});
    
}

userCtrl.editUser =  async (req, res) => {
    const {firstName,lastName,email,username,password} = req.body;
    const newUser = {firstName,lastName,email,username,password};
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({status: 'User actualizado'});
}

userCtrl.deleteUser =  async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User eliminado'});
}

module.exports = userCtrl;