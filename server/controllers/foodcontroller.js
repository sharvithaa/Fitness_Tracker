const model=require('../models/foodModel');
const jwt=require('jsonwebtoken');

exports.getAllfood=async(req,res)=>{
    try{
        const food=await model.find({});
        res.status(200).json({
            status:"Get food",
            data:food
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

exports.getfood=async(req,res)=>{
    try{
    const food=await model.find({_id:req.params.id});
    res.status.json({
        status:"Get the food",
        data:food
    });
    }
    catch(error)
    {
        console.log(error);
        res.status(400).json(
            {
                status:"Get food",
                error:error
            }
        )
    }
}

exports.createFood=async(req,res)=>{
    const data=req.body;
    try{
        const newdata=new foodModel(data);
        await newdata.save();
        res.status(200).json({
            status:"Created sucessfully",
            data:data
        });
    }
    catch(error)
    {
        console.log(error);
        res.status(400).json({
            status:"Not created successfully",
            error:error
        });
    }
}

exports.updateFood=async(req,res)=>
    {
    const data=req.body;
    try{
        const old=await model.find({_id:req.params._id});
        if(old.length==0)
            {
                res.status(400).json({
                    status:"Failed",
                    error:error
                });
            }
            const resp=await model.updateOne({_id: req.params.id}, data, {upsert: true})
            res.status(200).json({
                message: "workout Updated successfully 😌",
                data: resp
            });
    }
            catch(error) {
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
                const old=await model.find({_id: req.params.id});
        
                if(old.length=0) {
                    return res.status(400).json({
                        status: "failed",
                        message: "workout not found !"
                    })
                }
        
                const msg=await model.deleteOne({_id: req.params.id})
        
                res.status(200).json({
                    message: "food deleted successfully 😌",
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

