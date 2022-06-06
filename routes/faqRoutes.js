import express from "express"
import authenticateUser from '../middleware/auth.js'
const router = express.Router()

import { 
    createQuestion,
    answerQuestion ,
    getAllFaq
} from "../controllers/faqController.js"

router.route('/question').post(createQuestion)
router.route('/answer').post(answerQuestion)
router.route('/getfaqs').get(getAllFaq)


export default router