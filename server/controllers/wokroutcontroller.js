const workoutModel=require('../models/workoutModel');
const jwt=require('jsonwebtoken');

exports.getAllworkout=async(req, res) =>
{
    try{ 
        const workout=await workoutModel.find({})
        res.status(200).json({
            status:"Get wprkout ",
            data:workout
        });
    }catch(error){
        console.log(error);
        res.status(400).json({
            status:'Failed',
            error:error
        });
    }
}
exports.createworkout=async(req, res) =>
{
    const data=req.body;
    try{
        const newworkout=new workoutModel(data);
        await newworkout.save();
        res.status(200).json({
            message: "workout Created successfully 😌",
            data: data,
        });
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            status:'Failed',
            error:error
        });
    }
}
exports.getworkout=async(req, res) =>
{
    try{
        const workout=await workoutModel.find({_id: req.params.id})
        res.status(200).json({
            status:"Success ",
            data:book
        });
    }catch(error){
        console.log(error);
        res.status(400).json({
            status:'Failed',
            error:error
        });
    }
}
exports.updateworkout=async(req, res) =>
{
    const data=req.body;
    try {
        const old=await workoutModel.find({_id: req.params.id});

        if(old.length=0) {
            return res.status(400).json({
                status: "failed",
                message: "workout not found !"
            })
        }

        const resp=await workoutModel.updateOne({_id: req.params.id}, data, {upsert: true})
        res.status(200).json({
            message: "workout Updated successfully 😌",
            data: resp
        });
    } catch(error) {
        console.log(error);
        return res.status(400).json({
            status: "Failed",
            error: error
        });
    }
}
exports.deleteworkout=async(req, res) =>
{
    try {
        const old=await workoutModel.find({_id: req.params.id});

        if(old.length=0) {
            return res.status(400).json({
                status: "failed",
                message: "workout not found !"
            })
        }

        const msg=await workoutModel.deleteOne({_id: req.params.id})

        res.status(200).json({
            message: "workout deleted successfully 😌",
            result: {msg}
        });
    } catch(error) {
        console.log(error);
        return res.status(400).json({
            status: "Failed",
            error: error
        });
    }
}