import express from 'express'
import { Intro } from '../controllers/Portfolio.controllers.js';

const router = express.Router()

// Post Route for Intro
router.post('/intro', Intro)


export default router;