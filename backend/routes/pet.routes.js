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

petRouter.post("/",async(req,res)=>{
    const payload = req.body
    try{
        const pet = new PetModel(payload)
        await pet.save()
		res.status(200).json({msg:"data has been added"});
    }
    catch(e){
        res.status(400).json({e})
    }
})

petRouter.patch("/:id",async(req,res)=>{
    const { id } =req.params
    const payload = req.body
    try{
        await PetModel.findByIdAndUpdate(id,payload,{new:true})
		res.status(200).json({msg:"data has been updated"});
    }
    catch(e){
        res.status(400).json({e})
    }
})

petRouter.delete("/:id",async(req,res)=>{
    const { id } = req.params
    
    try{
        await PetModel.findByIdAndDelete(id,{new:true})
		res.status(200).json({msg:"data has been deleted"});
    }
    catch(e){
        res.status(400).json({e})
    }
})


module.exports = {
    petRouter
}