const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    eventType: { type: String, required: true },
    food: { type: String, required: true },
    venue: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    eventDate: { type: Date, required: true },
   
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
