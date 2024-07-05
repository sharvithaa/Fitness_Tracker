const jwt=require('jsonwebtoken')
const bcrypt=require("bcryptjs")

const userModel=require('../models/userModel');

exports.signup=async(req,res)=>{
    const data=req.body();
    try{
        data.password=await bcrypt.hash(req.body.password,12);
        console.log(data);
        const newuser=new userModel(data);
        await newuser.save();
    
        const token=jwt.sign({useName: req.body.userName}, process.env.JWT_KEY, {expiresIn: process.env.JWT_EXPIRES})
        res.status(200).json({
            message: "SignUp done successfully 😌",
            token,
            data: data,
        });

    }
    catch(error) {
        console.log(error);
        res.status(400).json({
            status: "failed",
            message: error
        });
    }
}

exports.login=async(req,res)=>{
    console.log(req.body);
    const {email,password}=req.body;

    if(!email||!password) {
        res.status(400).json({
            status: "Login Failed !",
            message: "Provide both Email & Password"
        });
    }
    try{
        var user=userModel.findOne({eMail:email});
        if(user.length<1||!user)
        {
            return res.status(400).json({
                status:"Login Failed !",
                message:"Provide valid email"
            });
        }
        if(!await bcrypt.compare(user.password,password))
            {
                return res.status(400).json({
                    status:"Login Failed!",
                    message:"Provide valid Password"
                });
            }
            const token=jwt.sign({email}, process.env.JWT_KEY, {expiresIn: process.env.JWT_EXPIRES})

            res.status(200).json({
                status: "Login Success",
                token,
                userData: {
                    id: user._id,
                    userName: user.userName,
                    eMail: user.eMail,
                    height:user.height,
                    weight:user.weight,
                    isAdmin: user.isAdmin
                }
    
            })

    }
    catch(error)
    {
        console.log(error);

    }
}