const express = require('express');
const { login, googleAuth } = require('../controllers/authController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Route for Google OAuth 2.0 authentication
router.get('/google', googleAuth);

// Route for user login
router.post('/login', login);

// Protected route example (if needed in the future)
router.get('/protected', authenticate, (req, res) => {
    res.status(200).json({ message: 'This is a protected route' });
});

module.exports = router;