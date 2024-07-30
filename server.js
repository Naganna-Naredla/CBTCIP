const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://naganna3579:nagannan@cluster0.pgjrnjh.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

app.use(bodyParser.json());
app.use(express.static('public'));

const plansSchema = new mongoose.Schema({
    eventType: { type: String, required: true },
    food: { type: String, required: true },
    venue: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    eventDate: { type: Date, required: true },
    payment: { type: String, required: true }
});

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
});

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true }
});

const Plan = mongoose.model('Plan', plansSchema);
const Contact = mongoose.model('Contact', contactSchema);
const Review = mongoose.model('Review', reviewSchema);

// Endpoints
app.get('/api/plans', async (req, res) => {
    try {
        const plans = await Plan.find();
        res.json(plans);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/contact', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/contact/submit', async (req, res) => {
    const contact = new Contact(req.body);
    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.post('/api/plans', async (req, res) => {
    console.log('Received plan submission:', req.body); // Log received data
    const plan = new Plan(req.body);
    try {
        const newPlan = await plan.save();
        res.status(201).json(newPlan);
    } catch (err) {
        console.error('Error saving plan:', err);
        res.status(400).json({ message: err.message });
    }
});

app.post('/api/reviews/add', async (req, res) => {
    const review = new Review(req.body);
    try {
        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get('/api/reviews', async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 }).limit(4);
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
