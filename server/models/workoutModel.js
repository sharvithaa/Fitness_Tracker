const mongoose=require('mongoose');

const workoutSchema=mongoose.Schema({
    workoutDate: {type: Date, "default": Date.now},
    category: {type: String, require},
    exerciseName: {type: String, require},
    minutes: {type: Number, require},
    caloriesburnt:{type:Number,require},
},
    {timestamps: true, })

module.exports=mongoose.model('workout',workoutSchema);