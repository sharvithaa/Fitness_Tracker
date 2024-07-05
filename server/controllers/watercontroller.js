
const model=require('../models/waterModel');

exports.getAllwater=async(req,res)=>{
     try{
        const water=await model.findAll({});
        res.status(200).json({
            status:"Get water",
            data:water
        });
     }
     catch(error)
     {
        console.log(error);
        res.status(400).json({
            status:"Failed",
            error:error
        });
     }
}

exports.createWater=async(req,res)=>{
    const data=req.body;
    try{
        const newdata=new model(data);
        await newdata.save();
        res.status(200).json({
            status:"Created water successfully☺",
            data:newdata
        });
    }
    catch(error)
    {
        console.log(error);
        res.status(400).json({
            status:"Creation failed",
            error:error
        });
    }
}

exports.deleteWater=async(req,res)=>{
    try{
        const old=await model.find({_id:req.params.id});
        if(old.length=0)
            {
                return res.status(400).json({
                    status:"Failed",
                    error:error
                });
            }
        const msg=await model.deleteOne({_id:req.params.id});
        res.status(200).json({
            message:"water deleted succesfully",
            result:{msg}
        });
    }
    catch(error)
        {
            console.log(error);
            res.status(400).json({
                message:"Deleted successfully",
                error:error
            });
        }
}