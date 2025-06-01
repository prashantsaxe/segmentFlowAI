const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    audienceSegment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Segment',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    deliveryStatus: {
        type: String,
        enum: ['pending', 'sent', 'failed'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

campaignSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;