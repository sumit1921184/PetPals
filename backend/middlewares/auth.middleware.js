const jwt = require("jsonwebtoken")
const {BlackListModel} = require("../model/blacklist.model")

const auth = async(req,res,next) => {
	const token = req.headers.authorization?.split(" ")[1]
	const blackToken = await BlackListModel.findOne({token})
		if(blackToken){
			res.status(200).json({msg:"Login Again for access"})
		}
	
	if (token) {
		jwt.verify(token,process.env.Key, (err,decoded) => {
				if (decoded) {
					next()
				}
				else{
					res.status(400).json({msg:err,token})
				}
			})
		
	} else {
		res.json({msg:"You are not Authorised"})
	}
}

module.exports = {
	auth
}