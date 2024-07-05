const {default: mongoose}=require("mongoose");

const userSchema=mongoose.Schema({
    userName: {type: String, require},
    password: {type: String, require},
    eMail: {type: String, require},
    Mobile: {type: String, require},
    height: {type: Number, require},
    weight: {type: Number, require},
    isAdmin: {type: Boolean,require,default:false}
}, {
    timestamps: true,
})

module.exports=mongoose.model("users", userSchema);