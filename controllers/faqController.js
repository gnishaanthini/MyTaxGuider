import { StatusCodes } from "http-status-codes"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js"
import bcrypt from 'bcryptjs'
import Faq from "../models/Faq.js"

const createQuestion = async (req, res, next) => {
    // console.log(req.user.userId)

    if (!req.user.userId) {
        throw new UnAuthenticatedError('you are not authorized')
    }

    const [employeeAlreadyExists, _ ] = await User.findById(req.user.userId)

    if (employeeAlreadyExists.length===0) {
        throw new UnAuthenticatedError('you are not authorized')
    }

    const employee = employeeAlreadyExists[0]
    // console.log(admin);

    if (employee.userType==='Customer') {
        throw new UnAuthenticatedError('you are not authorized')
    }

    const { quection, created_by} = req.body
    if (!quection || !created_by) {
        throw new BadRequestError('please provide all values')
    }

    // const [userAlreadyExists, _t ] = await User.findOne(username, userType)

    // if (userAlreadyExists.length>0) {
    //     throw new BadRequestError(`username: ${username} already in use`)
    // }

    const faq = new Faq(quection, created_by)
    const [ result, __ ] = await faq.create()
    // console.log(result);

    // const token = jwt.sign({ userId: result.insertId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME})
    // console.log(token);
    res.status(StatusCodes.CREATED).json({ faq: {
        quection: quection,
        created_by: created_by,
    } })
}

const answerQuestion = async (req, res) => {
    const { username, password, userType } = req.body
    if (!username || !password) {
        throw new BadRequestError('please provide all values')
    }

    const [userAlreadyExists, _ ] = await User.findOne(username, userType)

    if (userAlreadyExists.length===0) {
        throw new UnAuthenticatedError('Invalid Credentials')
    }

    const user = userAlreadyExists[0]
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
        throw new UnAuthenticatedError('Invalid Credentials')
    }
    
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME})

    user.password = undefined
    res.status(StatusCodes.OK).json({ user, token })
}

export {
    createQuestion,
    answerQuestion
}