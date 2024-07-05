const jwt=require('jsonwebtoken')
const bcrypt=require("bcryptjs")
const userModel=require("../models/userModel");

exports.getAllUser=async (req, res) =>
    {
        try {
            const users=await userModel.find({})
            res.status(200).json({
                status: "Get all users Done",
                data: users
            });
        } catch(error) {
            console.log(error);
            res.status(400).json({
                status: "Failed 😥",
                error: error
            });
        }
    }
    
exports.getUser=async (req, res) =>
    {
        try {
            const user=await userModel.find({rollNo: req.params.id})
    
            res.status(200).json({
                status: "success",
                data: user
            });
        } catch(error) {
            console.log(error);
            res.status(400).json({
                status: "Failed 😥",
                error: error
            });
        }
    }
    