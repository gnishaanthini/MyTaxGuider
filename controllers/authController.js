import { StatusCodes } from "http-status-codes"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js"
import bcrypt from 'bcryptjs'

const register = async (req, res, next) => {
    const { username, password, userType } = req.body
    if (!username || !password || !userType) {
        throw new BadRequestError('please provide all values')
    }

    const [userAlreadyExists, _ ] = await User.findOne(username, userType)

    if (userAlreadyExists.length>0) {
        throw new BadRequestError(`username: ${username} already in use`)
    }

    const user = new User(username, password, userType)
    const [ result, __ ] = await user.create()
    console.log(result);
    // TODO
    const token = jwt.sign({ userId: result.insertId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME})
    console.log(token);
    res.status(StatusCodes.CREATED).json({ user: {
        username: username,
        userType: user.userType,
    }, token })
}

const login = async (req, res) => {
    const { username, password, userType } = req.body
    if (!username || !password) {
        throw new BadRequestError('please provide all values')
    }

    // TODO
    const [userAlreadyExists, _ ] = await User.findOne(username, userType)

    if (userAlreadyExists.length==0) {
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
    register,
    login
}