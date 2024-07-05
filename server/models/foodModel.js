const mongoose=require("mongoose");

const foodSchema=mongoose.Schema({
    fooddate:{type:Date,"default":Date.now    },
    foodName:{type:String},
    Calories:{type:Number},
    Fat:{type:Number},
    Carb:{type:Number},
    Protien:{type:Number},
});

module.exports=mongoose.model('food',foodSchema);
