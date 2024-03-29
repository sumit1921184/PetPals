const express = require("express");
const { PetModel } = require("../model/pet.model");

const petRouter = express.Router();

petRouter.get("/",async(req,res)=>{
    try{
        const pet = await PetModel.find();
		res.status(200).json({pet});
    }
    catch(e){
        res.status(400).json({err})
    }
})

module.exports = {
    petRouter
}