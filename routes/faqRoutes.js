import express from "express"
import authenticateUser from '../middleware/auth.js'
const router = express.Router()

import { 
    createQuestion,
    answerQuestion 
} from "../controllers/faqController.js"

router.route('/question').post(authenticateUser, createQuestion)
router.route('/answer').post(authenticateUser, answerQuestion)

export default router