import { StatusCodes } from "http-status-codes"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js"
import bcrypt from 'bcryptjs'
import Faq from "../models/Faq.js"

const createQuestion = async (req, res, next) => {
    const { question, created_by} = req.body
    if (!question || !created_by) {
        throw new BadRequestError('please provide all values')
    }

    const faq = new Faq(question, created_by)
    const [ result, __ ] = await faq.create()
    console.log(result);

    res.status(StatusCodes.CREATED).json({ faq: {
        question: question,
        created_by: created_by,
    } })
}

const answerQuestion = async (req, res) => {
    const { id, answer, answered_by } = req.body
    // if (!username || !password) {
    //     throw new BadRequestError('please provide all values')
    // }

    // const [userAlreadyExists, _ ] = await User.findOne(username, userType)

    // if (userAlreadyExists.length===0) {
    //     throw new UnAuthenticatedError('Invalid Credentials')
    // }

    // const user = userAlreadyExists[0]
    // const isPasswordCorrect = await bcrypt.compare(password, user.password)
    // if (!isPasswordCorrect) {
    //     throw new UnAuthenticatedError('Invalid Credentials')
    // }
    
    // const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME})

    // user.password = undefined
    Faq.answerQuection(id, answer, answered_by)
    res.status(StatusCodes.OK).json({ answer: answer, answered_by: answered_by })
}

const getAllFaq = async (req, res, next) => {
    
    const [ result, __ ] = await Faq.getAllfaq()
    res.status(StatusCodes.OK).json({ faqs: result })
    //console.log(result)
}

export {
    createQuestion,
    answerQuestion,
    getAllFaq
}