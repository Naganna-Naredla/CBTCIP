const express = require('express');
const router = express.Router();
const Plan = require('../models/plan');

// Get all plans
router.get('/', async (req, res) => {
    try {
        const plans = await Plan.find();
        res.json(plans);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new plan
router.post('/', async (req, res) => {
    const plan = new Plan({
        eventType: req.body.eventType,
        food: req.body.food,
        venue: req.body.venue,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        eventDate: req.body.eventDate,
    });

    try {
        const newPlan = await plan.save();
        res.status(201).json(newPlan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
