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
    //console.log(result);

    res.status(StatusCodes.CREATED).json({ faq: {
        question: question,
        created_by: created_by,
    } })
}

const answerQuestion = async (req, res) => {
    const { id, answer, answered_by } = req.body
    if (!id || !answer || !answered_by) {
        throw new BadRequestError('please provide all values')
    }

    const [userAlreadyExists, _ ] = await User.findById(req.user.userId)

    if (userAlreadyExists.length===0) {
        throw new UnAuthenticatedError('Invalid Credentials')
    }

    const user = userAlreadyExists[0]
    
    if (user.userType==='Customer') {
        throw new UnAuthenticatedError('You are unautorized')
    }

    Faq.answerQuection(id, answer, answered_by)
    res.status(StatusCodes.OK).json({ answer: answer, answered_by: answered_by })
}

const getAllFaq = async (req, res, next) => {
    
    const [ result, __ ] = await Faq.getAllfaq()
    res.status(StatusCodes.OK).json({ faqs: result })
}

export {
    createQuestion,
    answerQuestion,
    getAllFaq
}