import express from 'express'
import { about, Intro, stack } from '../controllers/Portfolio.controllers.js';

const router = express.Router()

// Post Route for Intro
router.post('/intro', Intro)

// Post Route for About
router.post('/about', about)

// Post Route for Stack
router.post('/stack', stack)

export default router;