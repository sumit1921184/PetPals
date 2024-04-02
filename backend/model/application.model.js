const mongoose = require("mongoose")

const applicationSchema = mongoose.Schema({
	name:String,
    contact:Number,
    AadharId:String,
    address:String,
    reason:String,
    userId:String,
    petId:String,
    status:{type:String,
    enum:["Applied","Reviewed","Accept","Reject"],
default:"Applied"
    }
    
},{
	versionKey: false
})

const ApplicationModel = mongoose.model("application", applicationSchema)

module.exports = {
	ApplicationModel
}