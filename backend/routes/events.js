const express = require('express');
const Event = require('../models/Event');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// Create Event
router.post('/', protect, async (req, res) => {
    try {
        const event = await Event.create({ ...req.body, createdBy: req.user.id });
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get All Events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find().populate('createdBy', 'username');
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update Event
router.put('/:id', protect, async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event || event.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete Event
router.delete('/:id', protect, async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event || event.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        await event.deleteOne();
        res.json({ message: 'Event deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
