const Segment = require('../models/Segment'); // Assuming a Segment model exists
const kafkaProducer = require('./kafkaProducer');
const aiService = require('./aiService');

// Function to create a new audience segment
const createSegment = async (segmentData) => {
    try {
        const newSegment = new Segment(segmentData);
        await newSegment.save();

        // Produce a message to Kafka for further processing
        kafkaProducer.produce('segment-created', newSegment);

        return newSegment;
    } catch (error) {
        throw new Error('Error creating segment: ' + error.message);
    }
};

// Function to get all segments
const getAllSegments = async () => {
    try {
        const segments = await Segment.find();
        return segments;
    } catch (error) {
        throw new Error('Error fetching segments: ' + error.message);
    }
};

// Function to generate segment rules from natural language
const generateSegmentRules = async (prompt) => {
    try {
        const rules = await aiService.generateRulesFromPrompt(prompt);
        return rules;
    } catch (error) {
        throw new Error('Error generating segment rules: ' + error.message);
    }
};

module.exports = {
    createSegment,
    getAllSegments,
    generateSegmentRules,
};