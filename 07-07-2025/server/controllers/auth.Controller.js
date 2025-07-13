const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User.Model.js');
const Auth = require('../middlewares/Auth.js')

const express = require('express');
const Router = express.Router();

//Register new user
const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "please provide complete info!" })
        };
        const existedUser = await User.findOne({ email });
        if (existedUser) {
            return res.status(400).json({ message: "user alredey exist" })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashPassword });
        const savedUser = await newUser.save();
        return res.status(201).json({ message: "user successfully registered!", savedUser })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Login existing user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "please provide complete info!" })
        };
        const existedUser = await User.findOne({ email });
        if (!existedUser) {
            return res.status(404).json({ message: "user not found!!" })
        };
        const isValidPassword = await bcrypt.compare(password, existedUser.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: "invalid password!" })
        }

        const accesstoken = jwt.sign({ id: existedUser._id, email: existedUser.email }, process.env.JWT_ACCESS_TOKEN, { expiresIn: '30m' })
        const refreshToken = jwt.sign({ id: existedUser._id, email: existedUser.email }, process.env.JWT_REFRESH_TOKEN, { expiresIn: '2h' })
        res.cookie('accessToken', accesstoken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 30 * 60 * 1000
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 2 * 60 * 60 * 1000
        })
        res.status(200).json({ message: "login successfully" ,userId:{id: existedUser._id,email: existedUser.email}});
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//logout
const logout = (req, res) => {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    return res.status(200).json({ message: "Logged out successfully", userLogout: req.user });
};


//single user info fetching
const fetchMyInfo = async (req, res) => {
    try {
        const { id } = req.params;
        const existedUser = await User.findById(id);
        if (!existedUser) {
            return res.status(404).json({ message: "user not found!!" })
        };
        res.status(200).json({ message: "User fetched successfully", user: existedUser })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const authMe = async (req, res) => {
    try {

        res.status(200).json({ message: 'User verified!', user: req.user });

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

Router.post('/register', register);
Router.post('/login', login);
Router.patch('/logout', Auth,logout);
Router.get('/me',Auth, authMe);
Router.get('/me/:id', Auth, fetchMyInfo);

module.exports = Router;