import express from 'express';
import { register } from '../controllers/userController.js';  // Import the register function from the controller

const router = express.Router();

// POST request to register a user
router.post('/register', register);

export default router;
