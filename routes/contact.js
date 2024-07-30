const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

// Get all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new contact
router.post('/', async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        details: req.body.details
    });

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
