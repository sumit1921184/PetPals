const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
	username: {type:String,required:true},
	email: {type:String,required:true},
	pass: {type:String,required:true},
    age:{type:Number,required:true},
    role:{type:String,
        enum:["user","admin"],
        default:"user"
    }
},{
	versionKey: false
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {
	UserModel
}


