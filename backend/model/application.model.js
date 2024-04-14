const mongoose = require("mongoose")

const applicationSchema = mongoose.Schema({
    
	name:{type:String,required:true},
    contact:{type:Number,required:true},
    AadharId:{type:String,required:true},
    address:{type:String,required:true},
    reason:{type:String,required:true},
    userId:{type:String,required:true},
    petId:{type:String,required:true},
    petName:{type:String,required:true},
    petAge:{type:String,required:true},
    color:{type:String,required:true},
    petGender:{type:String,required:true},
    url:{type:String,required:true},
    description:{type:String,required:true},
    isAdopted:{type:String,required:true},
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