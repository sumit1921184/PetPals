const express = require('express');
const Hackathon = require('../model/create.model');
const { auth } = require('../middlewares/auth.middleware');
const createRouter = express.Router();

createRouter.post('/create', auth, async (req, res) => {
    try {
        const userId = req.id
        console.log(userId);
        const data = { ...req.body, userId }
        const hackathon = new Hackathon(data);
        await hackathon.save();
        res.status(201).json(hackathon);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

createRouter.get('/', async (req, res) => {
    try {
        const hackathons = await Hackathon.find();
        res.json(hackathons);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

createRouter.delete('/:id', auth, async (req, res) => {
    try {
        const hackathon = await Hackathon.findById(req.params.id);
        if (!hackathon) {
            return res.status(404).json({ error: 'Hackathon not found' });
        }
        if (hackathon.userId.toString() !== req.id) {
            return res.status(403).json({ error: 'Unauthorized' });
        }
        await Hackathon.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Hackathon deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

createRouter.put('/:id', auth, async (req, res) => {
    try {
        const hackathon = await Hackathon.findById(req.params.id);
        if (!hackathon) {
            return res.status(404).json({ error: 'Hackathon not found' });
        }
        if (hackathon.userId.toString() !== req.id) {
            return res.status(403).json({ error: 'Unauthorized' });
        }
        const updatedHackathon = await Hackathon.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedHackathon);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Filter routes
createRouter.get('/upcoming', async (req, res) => {
    try {
        const currentDate = new Date();
        const upcomingHackathons = await Hackathon.find({ startDate: { $gt: currentDate } });
        res.status(200).json(upcomingHackathons);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

createRouter.get('/past', async (req, res) => {
    try {
        const currentDate = new Date();
        const pastHackathons = await Hackathon.find({ endDate: { $lt: currentDate } });
        res.status(200).json(pastHackathons);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

createRouter.get('/live', async (req, res) => {
    try {
        const currentDate = new Date();
        const liveHackathons = await Hackathon.find({ startDate: { $lte: currentDate }, endDate: { $gte: currentDate } });
        res.status(200).json(liveHackathons);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = {
    createRouter
};
