import express from "express"
import authenticateUser from '../middleware/auth.js'
const router = express.Router()

import { 
    register,
    login 
} from "../controllers/adminController.js"

router.route('/register').post(authenticateUser, register)
router.route('/login').post(login)

export default router