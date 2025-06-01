const { body, validationResult } = require('express-validator');

const validateCustomer = [
    body('name').isString().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').isString().optional(),
];

const validateOrder = [
    body('customerId').isMongoId().withMessage('Valid customer ID is required'),
    body('items').isArray().withMessage('Items must be an array'),
    body('totalAmount').isNumeric().withMessage('Total amount is required'),
];

const validateCampaign = [
    body('name').isString().notEmpty().withMessage('Campaign name is required'),
    body('segmentId').isMongoId().withMessage('Valid segment ID is required'),
    body('message').isString().notEmpty().withMessage('Message content is required'),
];

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateCustomer,
    validateOrder,
    validateCampaign,
    validateRequest,
};