const mongoose=require('mongoose');

const waterSchema=mongoose.Schema(
    {
        Date:{type:Date,"default":Date.now},
        quan:{type:Number},
        unit:{type:String}
    }
);

module.exports=mongoose.model('water',waterSchema);