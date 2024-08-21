const User = require("../model/user.model");
const bcrypt = require('bcrypt');


// Add New User
exports.addNewUser = async (req, res) =>{
    try {
        // console.log(req.body);
        const {firstName, lastName, email, hobbies, address, age } = req.body;
        let user = await User.findOne({ email: email});
        if (user)
            return res.status(400).json({ message: "User already Exist.........."});
        user = await User.create({
            firstName, lastName, email, age, hobbies, address,
        });
        user.save();
        res.status(201).json({user, message: "User Added"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error"});
        
    }
};

// Get All Users
exports.getAllUser = async (req, res)=>{
    try {
        let user = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error"});
    }
};

// Get  Users
exports.getUser = async (req, res)=>{
    try {
        let user = await User.findById(req.query.userId);
        if(!user)
            return res.status(400).json({message: 'User Nit Found'})
        res.status(200).json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error"});
    }
};

// Update User

exports.updateUser = async (req, res)=>{
    try {
        let user = await User.findById(req.query.userId);
        if(!user){
            return res.status(400).json({message: 'User Nit Found'});
    }
    user = await User.findByIdUpdate(req.query.userId, {$set:req.body}, {new: true});
    user.save();
    res.status(202).json({user,messge: 'User Update Success'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error"});
    }
};

// Delet User

exports.deleteUser = async (req, res)=>{
    try {
        let user = await User.findById(req.query.userId);
        if(!user){
            return res.status(400).json({message: 'User Nit Found'});
    }
    user = await User.findByIdAndDelete(user._id);
    res.status(202).json({user,messge: 'User Update Success'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error"});
    }
};

//registration

exports.registration = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (user) return res.status(400).json({ message: 'user already exists...' });
        let hashpasssword = await bcrypt.hash(req.body.password, 10);
        user = await User.create({ ...req.body, password: hashpasssword });
        res.status(201).json({ message: 'user registration successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

login 
exports.login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (!user) return res.status(404).json({ message: 'user not found...' });
        let matchpassword = await bcrypt.compare(req.body.password, user.password);
        if (!matchpassword) return res.status(400).json({ message: 'email or password incorrect...' });
        res.status(200).json({ message: 'login successs...', user })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};