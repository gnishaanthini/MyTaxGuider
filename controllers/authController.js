import { StatusCodes } from "http-status-codes"
import User from "../models/User.js"
import { BadRequestError } from "../errors/index.js"

const register = async (req, res, next) => {
    const { username, password, userType } = req.body
    if (!username || !password || !userType) {
        throw new BadRequestError('please provide all values')
    }

    const [userAlreadyExists, _] = await User.findOne(username, userType)

    if (userAlreadyExists.length>0) {
        throw new BadRequestError(`username: ${username} already in use`)
    }

    const user = new User(username, password, userType)
    const result = await user.create()
    
    // TODO: jwt
    // const token = user.createJWT()
    const token = 'not implemented yet'

    res.status(StatusCodes.CREATED).json({ user: {
        username: username,
        userType: user.userType,
    }, token })
}

export {
    register
}