const User = require('../models/user');
const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.createUser = async (req, res) => {
    const {name,lastname,email,username,password} = req.body;
    const user = new User({name,lastname,email,username,password});
    await user.save();
    res.json({status: 'User guardado'});
}

userCtrl.editUser =  async (req, res) => {
    const {name,lastname,email,username,password} = req.body;
    const newUser = {name,lastname,email,username,password};
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({status: 'User actualizado'});
}

userCtrl.deleteUser =  async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User eliminado'});
}

module.exports = userCtrl;