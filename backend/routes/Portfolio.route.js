import express from 'express'
import { about, createBlog, createProject, getPorfolioDetails, getSingleProject, Intro, stack } from '../controllers/Portfolio.controllers.js';

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

// Get portfolio detail rotues
router.get('/getportfolio', getPorfolioDetails)

// get single project details
router.get('/getproject/:projectId', getSingleProject)








export default router;