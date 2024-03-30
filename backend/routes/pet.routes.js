const express = require("express");
const { PetModel } = require("../model/pet.model");

const petRouter = express.Router();

petRouter.get("/", async (req, res) => {
    try {
        const pets = await PetModel.find();
        res.status(200).json({ pets });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

petRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const pet = await PetModel.findById(id);
        if (!pet) {
            return res.status(404).json({ message: "Pet not found" });
        }
        res.status(200).json({ pet });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

petRouter.post("/", async (req, res) => {
    const payload = req.body;
    try {
        const pet = new PetModel(payload);
        await pet.save();
        res.status(200).json({ msg: "Data has been added" });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

petRouter.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        await PetModel.findByIdAndUpdate(id, payload, { new: true });
        res.status(200).json({ msg: "Data has been updated" });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

petRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await PetModel.findByIdAndDelete(id);
        res.status(200).json({ msg: "Data has been deleted" });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

module.exports = {
    petRouter
};
