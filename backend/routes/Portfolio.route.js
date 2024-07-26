import express from 'express'
import { about, createBlog, createProject, Intro, stack } from '../controllers/Portfolio.controllers.js';

const router = express.Router()

// Post Route for Intro
router.post('/intro', Intro)

// Post Route for About
router.post('/about', about)

// Post Route for Stack
router.post('/stack', stack)

// Post Route for project
router.post('/createproject', createProject)

// Post route for blog
router.post('/createblog', createBlog)
export default router;